---
to: src/<%= name %>/index.tsx
---
import React, { FC } from 'react'
import styled from 'styled-components'


// 组件styledCss
const FO<%= name %> = styled.div`

`

// 组件PropsType
interface <%= name %>props {
    children: any
}

const <%= name %>: FC< <%= name %>props > = (props) => {
    const { children } = props

    return <FO<%= name %>>{children}</FO<%= name %>>
}

export default <%= name %>


