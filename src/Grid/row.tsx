import React, { FC } from 'react'
import styled from 'styled-components'
import type { FORowProps } from './grid'
import RowContext from './RowContext'

/**
 * FORowProps
 */

const FORow = styled.div<FORowProps>`
    width: 100%;
    display: flex;
    flex-flow: ${(props) => (props.wrap ? 'row wrap' : 'nowrap')};
    min-width: 0;
`

const Row: FC<FORowProps> = (props: FORowProps) => {
    const { children, gutter = [0, 0], style, wrap = true } = props
    const rowContext = React.useMemo(() => gutter, [gutter])
    return (
        <RowContext.Provider value={rowContext}>
            <FORow style={style} wrap={wrap} gutter={gutter}>
                {children}
            </FORow>
        </RowContext.Provider>
    )
}

export default Row
