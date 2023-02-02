import React, { FC } from 'react'
import styled from 'styled-components'

// 组件styledCss
const FOScore = styled.div``

// 组件PropsType
interface Scoreprops {
    children: any
}

const Score: FC<Scoreprops> = (props) => {
    const { children } = props

    return <FOScore>{children}</FOScore>
}

export default Score
