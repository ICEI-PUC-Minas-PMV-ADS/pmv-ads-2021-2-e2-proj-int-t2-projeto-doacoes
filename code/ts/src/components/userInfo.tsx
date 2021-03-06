import React, { Dispatch, SetStateAction } from 'react'
import { StyledInput, StyledLabel } from './styled'

interface IProps {
    email: string
    setEmail: Dispatch<SetStateAction<string>>
    password: string
    setPassword: Dispatch<SetStateAction<string>>
}

export function UserInfo({ email, setEmail, password, setPassword }: IProps): JSX.Element {
    return (
        <>
            <StyledLabel className={`column`}>
                Email
                <StyledInput required type="email" value={email} onChange={event => setEmail(event.target.value)} />
            </StyledLabel>
            <StyledLabel className={`column`}>
                Senha
                <StyledInput
                    required
                    type="password"
                    value={password}
                    onChange={event => setPassword(event.target.value)}
                />
            </StyledLabel>
        </>
    )
}
