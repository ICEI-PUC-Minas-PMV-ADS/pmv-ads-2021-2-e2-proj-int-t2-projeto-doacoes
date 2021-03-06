import React, { useContext, useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import styled from 'styled-components'
import { getEventsFromPlace, getPlace, SESSION_DATA } from '../apis'
import { SelectedPlaceContext } from '../App'
import { PageHeader } from '../components/pageHeader'
import { DONOR, ROUTES } from '../utils'
import { AssetActions } from './assetActions'

export function SelectedPlace(): JSX.Element {
    const { selectedPlace, setSelectedPlace } = useContext(SelectedPlaceContext)
    const [placeEvents, setPlaceEvents] = useState<EventForm[]>([])
    const params = useParams() as { placeId: string }

    useEffect(() => {
        if (!selectedPlace && params.placeId) {
            getPlace(Number(params.placeId))
                .then(place => {
                    setSelectedPlace?.(place)

                    return place
                })
                .then(place => getEventsFromPlace(place.id as number).then(events => setPlaceEvents(events)))
        } else {
            getEventsFromPlace(selectedPlace?.id as number).then(events => setPlaceEvents(events))
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    function handleMessageClick(): void {
        const phone = `55${selectedPlace?.phone}`

        const url = `https://wa.me/${phone}`

        window.open(url, '_blank')
    }

    return selectedPlace ? (
        <StyledSelectedPlace className={`selectedPlace`}>
            <PageHeader pageName={selectedPlace.name} />
            <AssetActions itemId={selectedPlace.id || 0} itemType={'place'} />
            <span className={`selectedPlace--acceptableItems`}>
                <strong>Items aceitaveis: </strong> {selectedPlace.configuredItems?.map(el => el.produto).join(', ')}
            </span>
            <span className={`selectedPlace--cep`}>
                <strong>CEP: </strong> {selectedPlace.cep}
            </span>
            <span className={`selectedPlace--buildingNum`}>
                <strong>Número: </strong> {selectedPlace.buildingNum}
            </span>
            <span className={`selectedPlace--description`}>
                <strong>Descrição: </strong> {selectedPlace.description}
            </span>
            <span className={`selectedPlace--latitude`}>
                <strong>Latitude: </strong> {selectedPlace.latitude}
            </span>
            <span className={`selectedPlace--longitude`}>
                <strong>Longitude: </strong> {selectedPlace.longitude}
            </span>
            <span className={`selectedPlace--phone`}>
                <strong>Telefone: </strong> {selectedPlace.phone}
            </span>
            <span className={`selectedPlace--workingDays`}>
                <strong>Dias de funcionamento: </strong> {selectedPlace.workingDays.join(`, `)}
            </span>
            <span className={`selectedPlace--workingHoursFrom`}>
                <strong>das: </strong> {selectedPlace.workingHours.from}
            </span>
            <span className={`selectedPlace--workingHoursTo`}>
                <strong>as: </strong> {selectedPlace.workingHours.to}
            </span>
            {placeEvents.length ? (
                <div className={`selectedPlace--events`}>
                    <h2 className={`selectedPlace--events__title`}>Eventos de distribuição</h2>
                    {placeEvents.map(event => (
                        <div className={`selectedPlace--events__card`} key={event.id}>
                            <Link
                                className={`selectedPlace--events__card--link`}
                                to={`${ROUTES.PLACES}/${selectedPlace.id}${ROUTES.EVENTS}/${event.id}`}
                            >
                                <h2 className={`selectedPlace--events__card--link--name`}>{event.name}</h2>
                                <span className={`selectedPlace--events__card--link--date`}>{event.date}</span>
                                <span className={`selectedPlace--events__card--link--time`}>
                                    {event.workingHours.from} - {event.workingHours.to}
                                </span>
                            </Link>
                        </div>
                    ))}
                </div>
            ) : null}
            <button type="button" className="selectedPlace--message" onClick={handleMessageClick}>
                Enviar Mensagem
                <i className="fab fa-whatsapp"></i>
            </button>
        </StyledSelectedPlace>
    ) : (
        <div />
    )
}

const StyledSelectedPlace = styled.div`
    padding: var(--padding);
    display: flex;
    flex-direction: column;
    position: relative;
    .selectedPlace {
        &--acceptableItems,
        &--buildingNum,
        &--cep,
        &--description,
        &--latitude,
        &--longitude,
        &--phone,
        &--workingDays,
        &--workingHoursFrom,
        &--workingHoursTo {
            margin-bottom: 40px;

            strong {
                color: var(--dark-blue);
                text-transform: uppercase;
            }
        }

        &--events {
            &__card {
                padding: 20px;
                margin-bottom: 10px;
                display: flex;
                flex-direction: column;
                border-radius: 3px;
                box-shadow: 0px 0px 3px 2px rgba(0, 0, 0, 0.22);
                &--link {
                    display: flex;
                    flex-direction: column;
                    align-items: flex-start;
                    &--name,
                    &--date,
                    &--time {
                        font-size: 14px;
                        margin-bottom: 15px;
                    }
                    &--name {
                        color: var(--dark-blue);
                        text-transform: capitalize;
                        font-weight: 700;
                        font-size: 18px;
                    }
                }
            }
        }

        &--message {
            color: white;
            border: none;
            background: #25d366;
            padding: 15px;
            border-radius: 8px;
            font-size: 16px;
            font-weight: bold;
            display: flex;
            align-items: center;
            justify-content: center;
            i {
                margin-left: 8px;
            }
        }
    }
`
