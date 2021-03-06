import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { logOutUser, SESSION_DATA } from '../apis'
import { SelectedPlaceContext, SelectedEventContext, UserLoggedContext } from '../App'
import { ConfirmationDialog } from '../places/confirmationDialog'
import { COLLECTOR, ROUTES } from '../utils'
interface IProps {
    selectedView: string
    setSelectedView: (type: string) => void
}
export function MenuOptions({ selectedView, setSelectedView }: IProps): JSX.Element {
    const [showDialog, setShowDialog] = useState(false)
    const { setSelectedPlace } = useContext(SelectedPlaceContext)
    const { setSelectedEvent } = useContext(SelectedEventContext)
    const { userIsLogged, setUserIsLogged } = useContext(UserLoggedContext)
    useEffect(() => {
        setSelectedPlace?.(undefined)
        setSelectedEvent?.(undefined)
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    function handleLogOut(): void {
        logOutUser()
        setUserIsLogged?.(false)
        setShowDialog(false)
    }

    return (
        <StyledMenuOptions className={`menuOptions ${selectedView === `menu` ? `open` : ``}`}>
            <button className={`menuOptions--header `} onClick={() => setSelectedView(`map`)}>
                <h1 className={`menuOptions--header__title`}>MAPA DO BEM</h1>
                <i className="fas fa-chevron-down" />
            </button>
            <ul className={`menuOptions--optionList `}>
                {userIsLogged ? (
                    <>
                        <li className={`menuOptions--optionList__item `}>
                            <Link to={ROUTES.PROFILE} className={`menuOptions--optionList__item--button `}>
                                <i className="fas fa-user"></i> Perfil
                            </Link>
                        </li>
                        {window.sessionStorage.getItem(SESSION_DATA.USER_TYPE) === COLLECTOR ? (
                            <>
                                <li className={`menuOptions--optionList__item `}>
                                    <Link to={ROUTES.NEW_PLACE} className={`menuOptions--optionList__item--button `}>
                                        <i className="fas fa-sign-in-alt"></i>
                                        Adicionar Ponto de Coleta
                                    </Link>
                                </li>
                                <li className={`menuOptions--optionList__item `}>
                                    <Link to={ROUTES.NEW_EVENT} className={`menuOptions--optionList__item--button `}>
                                        <i className="fas fa-sign-in-alt"></i>
                                        Adicionar evento de doa????o
                                    </Link>
                                </li>
                                <li className={`menuOptions--optionList__item `}>
                                    <Link to={ROUTES.PLACES} className={`menuOptions--optionList__item--button `}>
                                        <i className="fas fa-map-marker-alt"></i>
                                        Meus Pontos de coleta
                                    </Link>
                                </li>
                                <li className={`menuOptions--optionList__item `}>
                                    <Link to={ROUTES.EVENTS} className={`menuOptions--optionList__item--button `}>
                                        <i className="far fa-calendar"></i> Meus Eventos
                                    </Link>
                                </li>
                            </>
                        ) : (
                            <li className={`menuOptions--optionList__item `}>
                                <Link to={ROUTES.FAVOURITES} className={`menuOptions--optionList__item--button `}>
                                    <i className="far fa-star"></i>
                                    Favoritos
                                </Link>
                            </li>
                        )}
                        <li className={`menuOptions--optionList__item `}>
                            <button
                                onClick={() => setShowDialog(true)}
                                className={`menuOptions--optionList__item--button `}
                            >
                                <i className="fas fa-sign-out-alt"></i>
                                Logout
                            </button>
                        </li>
                    </>
                ) : (
                    <li className={`menuOptions--optionList__item `}>
                        <Link to={ROUTES.LOGIN} className={`menuOptions--optionList__item--button `}>
                            <i className="fas fa-sign-in-alt"></i>
                            Login
                        </Link>
                    </li>
                )}
            </ul>
            {showDialog ? (
                <ConfirmationDialog
                    onCancel={() => setShowDialog(false)}
                    onDelete={() => handleLogOut()}
                    text={'sair'}
                />
            ) : null}
        </StyledMenuOptions>
    )
}

const StyledMenuOptions = styled.nav`
    position: absolute;
    top: 100vh;
    left: 0;
    height: 100vh;
    width: 100%;
    background: white;
    padding: 10px 40px;
    transition: all 0.5s ease-in-out;
    max-height: 0;
    overflow: hidden;
    &.open {
        transform: translateY(-100vh);
        max-height: 100vh;
    }
    .menuOptions {
        &--header {
            display: flex;
            border: none;
            background: transparent;
            align-items: center;
            justify-content: space-between;
            width: 100%;
            &__title {
                color: var(--red);
            }
            i {
                color: var(--yellow);
            }
        }
        &--optionList {
            padding: 0;
            &__item {
                list-style: none;
                &--button {
                    display: flex;
                    align-items: center;
                    padding: 10px;
                    border-radius: 10px;
                    padding: 18px 0;
                    border: none;
                    background: white;
                    text-decoration: none;
                    font-size: 18px;
                    &,
                    &:visited {
                        color: var(--dark-blue);
                    }
                    i {
                        margin-right: 8px;
                        color: var(--yellow);
                    }
                }
                &:hover {
                    background: lightblue;
                }
            }
        }
    }
`
