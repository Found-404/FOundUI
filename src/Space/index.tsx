import React from 'react'
import styled from 'styled-components'

type SpaceProps = {
    children: React.ReactNode
    direction?: 'horizontal' | 'vertical'
    size?: 'small' | 'middle' | 'large' | number
    wrap?: boolean
}

const SpaceDiv = styled.div<{
    direction?: 'horizontal' | 'vertical'
    size?: 'small' | 'middle' | 'large' | number
    wraps?: boolean
}>`
    display: flex;
    flex-direction: ${({ direction }) => (direction === 'vertical' ? 'column' : 'row')};
    gap: ${({ size }) => {
        if (typeof size === 'number') {
            return size + 'px'
        } else {
            switch (size) {
                case 'small':
                    return '8px'
                case 'middle':
                    return '16px'
                case 'large':
                    return '24px'
            }
        }
    }};
    flex-wrap: ${({ wraps }) => (wraps ? 'wrap' : '')};
`

const Space = (props: SpaceProps) => {
    const { children, direction = 'horizontal', size = 'small', wrap } = props
    const childArray = React.Children.toArray(children)
    return (
        <SpaceDiv direction={direction} size={size} wraps={wrap} className="FOundUI-Space">
            {childArray.map((child, index) => (
                <React.Fragment key={index}>
                    {child}
                    {index !== childArray.length - 1 && <span></span>}
                </React.Fragment>
            ))}
        </SpaceDiv>
    )
}

export default Space
