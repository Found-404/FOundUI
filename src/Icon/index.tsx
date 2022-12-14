import React, { FC } from 'react'
import styled from 'styled-components'

// 组件styledCss
const FOIcon = styled.div``

// 组件PropsType
interface Iconprops {
    children: any
}

const Icon: FC<Iconprops> = (props) => {
    const { children } = props

    return <FOIcon>{children}</FOIcon>
}

export default Icon
