import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import styled from 'styled-components'

export function AssetActions(): JSX.Element {
    const location = useLocation().pathname

    return (
        <StyledAssetActions className={`assetActions`}>
            <button className={`assetActions--favourite`}>
                <i className="far fa-star"></i>
                {/* filled star <i class="fas fa-star"></i> */}
            </button>
            <Link to={location + `/edit`} className={`assetActions--edit`}>
                <i className="far fa-edit"></i>
            </Link>
            <button className={`assetActions--remove`}>
                <i className="far fa-trash-alt"></i>
            </button>
        </StyledAssetActions>
    )
}

const StyledAssetActions = styled.div`
    width: auto;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    position: absolute;
    top: var(--padding);
    right: var(--padding);
    .assetActions {
        &--edit,
        &--remove,
        &--favourite {
            padding: 15px;
            background: transparent;
            color: var(--dark-blue);
            border: none;
            font-size: 18px;
            transform: translate(10px, -25%);
        }
        &--remove {
            color: var(--red);
        }
        &--favourite {
            color: var(--black);
        }
    }
`