---
to: src/<%= name %>/index.ts
---

import React, { FC } from 'react'
import styled from 'styled-components'

const FO<%= name %> = styled.<%= name %>`

`

<%= name %>.props = {
    children:PropTypes.any
}

const <%= name %>: FC< <%= name %>Props > = (props) => {
    const { children } = props

    return <FO <%= name %> >{children}</FO <%= name %> >
}

export default FO<%= name %>



export default <%= name %>

