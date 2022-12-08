import React, { FC } from 'react'
import styled from 'styled-components'

const FOButton = styled.button`
    background: transparent;
    border-radius: 3px;
    border: 2px solid palevioletred;
    color: palevioletred;
    margin: 0 1em;
    padding: 0.25em 1em;
`

interface ButtonProps {
    children: string
}

const Button: FC<ButtonProps> = (props) => {
    const { children } = props

    return <FOButton>{children}</FOButton>
}

export default Button
