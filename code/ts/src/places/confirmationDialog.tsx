import React from 'react'
import styled from 'styled-components'

interface Props {
    onDelete: () => void
    onCancel: () => void
    text?: string
}

export function ConfirmationDialog({ onDelete, onCancel, text }: Props): JSX.Element {
    return (
        <StyledConfirmationDialog className={`confirmationDialog`}>
            <div className="confirmationDialog--backdrop" />
            <div className={`confirmationDialog--container`}>
                <span className={`confirmationDialog--container__text`}>
                    Tem certeza que deseja {text || 'deletar'}?
                </span>
                <button className={`confirmationDialog--container__delete`} onClick={() => onDelete()}>
                    Sim
                </button>
                <button className={`confirmationDialog--container__cancel`} onClick={() => onCancel()}>
                    Cancelar
                </button>
            </div>
        </StyledConfirmationDialog>
    )
}

const StyledConfirmationDialog = styled.div`
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    .confirmationDialog {
        &--backdrop {
            width: 100%;
            height: 100%;
            background: black;
            opacity: 0.3;
            position: absolute;
            top: 0;
            left: 0;
        }
        &--container {
            padding: 25px;
            display: flex;
            flex-wrap: wrap;
            background-color: white;
            z-index: 2;
            width: 80%;
            &__text {
                width: 100%;
                color: var(--black);
                margin-bottom: 40px;
            }
            &__delete {
                border: none;
                background: var(--red);
                padding: 10px;
                border-radius: 5px;
                color: white;
                font-weight: bold;
                margin-right: 8px;
            }
            &__cancel {
                color: var(--dark-blue);
                border: none;
                background: transparent;
            }
        }
    }
`
