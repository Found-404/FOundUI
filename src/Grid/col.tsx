import React, { FC, useContext } from 'react'
import styled from 'styled-components'
import { FOColProps } from './grid'
import RowContext from './RowContext'

const FOCol = styled.div<FOColProps>`
    min-height: 30px;
    text-align: center;
    border-radius: 0;
    line-height: 2em;
    display: block;
    flex: ${(props) => (props.span ? `0 0 ${(props.span * 100) / 24}%` : `0 0 ${(6 * 100) / 24}%`)};
    max-width: ${(props) => (props.span ? `${(props.span * 100) / 24}%` : `${(6 * 100) / 24}%`)};
    display: ${(props) => (props.span === 0 ? 'none' : 'block')};
    margin-left: ${(props) => (props.offset ? ` ${(props.offset * 100) / 24}%` : '')};
`
const ColSpan = styled.div<any>`
    padding: ${(props) => `${props.gutter[0] / 2}px ${props.gutter[1] / 2}px`};
`
const Col: FC<FOColProps> = (props: FOColProps) => {
    const { children, style } = props
    const gutter = useContext(RowContext)
    return (
        <FOCol span={props.span} offset={props.offset}>
            <ColSpan gutter={gutter}>
                <div style={style}>{children}</div>
            </ColSpan>
        </FOCol>
    )
}
export default Col
