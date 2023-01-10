import { useMouse } from 'ahooks'
import { cloneDeep } from 'lodash'

import React, { FC, useRef, useState } from 'react'
import styled from 'styled-components'

import { primaryColorSystem } from '../style'
import type { ButtonProps, FOButtonProps, RippleArrayType, RippleProps } from './Button'

/**
 * FOButtonProps
 */

const FOButton = styled.button<FOButtonProps>`
    position: relative;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    display: inline-block;
    font-family: '微软雅黑';
    /* color: ${(props) => (props.variant === 'contained' ? '#fff' : primaryColorSystem.FOBLUE)}; */
    color: ${(props) => {
        if (props.variant === 'contained' && props.disabled === false) {
            return '#fff'
        } else if (props.variant === 'contained' && props.disabled === true) {
            return '#00000042'
        } else if (props.variant !== 'contained' && props.disabled === false) {
            return primaryColorSystem.FOBLUE
        } else if (props.variant !== 'contained' && props.disabled === true) {
            return '#00000042'
        }
    }};
    padding: 9px 15px;
    cursor: ${(props) => (!props.disabled ? 'pointer' : 'default')};
    background-color: ${(props) => {
        if (props.disabled) {
            switch (props.variant) {
                case 'text':
                    return '#ffffff10'
                    break
                case 'contained':
                    return '#0000001f'
                    break
                case 'outlined':
                    return '#ffffff10'
                    break
                default:
                    break
            }
        }
        switch (props.variant) {
            case 'text':
                return '#ffffff10'
                break
            case 'contained':
                return primaryColorSystem.FOBLUE
                break
            case 'outlined':
                return '#ffffff10'
                break
            default:
                break
        }
    }};
    border-radius: ${(props) => (props.radio ? '20px' : '3px')};
    font-size: 12px;
    font-weight: 500;
    text-decoration: none;
    box-shadow: ${(props) =>
        props.variant === 'contained' && !props.disabled ? '1px 1px 3px #7459e9' : 'none'};
    border-style: solid;
    box-sizing: border-box;
    border-width: 1px;
    border-color: ${(props) => {
        if (props.variant === 'outlined' && props.disabled) {
            return '#0000001f'
        } else if (props.variant === 'outlined' && !props.disabled) {
            return primaryColorSystem.FOBLUE
        } else {
            return '#ffffff11'
        }
    }};
    transition: all 0.4s ease;
    &:hover {
        background-color: ${(props) => {
            if (!props.disabled) {
                switch (props.variant) {
                    case 'text':
                        return primaryColorSystem.FOBLUE + '1a'
                        break
                    case 'contained':
                        return '#0a62bb'
                        break
                    case 'outlined':
                        return primaryColorSystem.FOBLUE + '1a'
                        break
                    default:
                        break
                }
            }
        }};
    }
    .FOButton-root {
        overflow: hidden;
        width: 100%;
        height: 100%;
        position: absolute;
        top: 0px;
        left: 0px;
        border-radius: ${(props) => (props.radio ? '20px' : '3px')};
    }
    .rtr-ripple-wrapper-exiting {
        opacity: 0.5;
        animation: rtr-ripple-enter 0.8s ease-in-out;
        animation-fill-mode: forwards;
    }

    @keyframes rtr-ripple-enter {
        0% {
            transform: scale(0);
            opacity: 0.5;
        }
        100% {
            transform: scale(2);
            opacity: 0;
        }
    }
`
/**
 * FOspan 涟漪气泡样式
 */
const FOspan = styled.span`
    position: absolute;
    top: 0px;
    left: 0px;
    display: inline-block;
    width: 100px;
    height: 100px;
    background-color: #62aae9;
    border-radius: 50%;
`

/**
 * 涟漪气泡组件
 */
const Ripple: FC<RippleProps> = ({ Xy = { top: 0, left: 0 } }) => (
    <FOspan style={{ top: Xy.top, left: Xy.left }} className="rtr-ripple-wrapper-exiting"></FOspan>
)

const Button: FC<ButtonProps> = (props) => {
    const { children, variant = 'text', radio = false, style, disabled = false } = props
    const [rippleArray, setRippleArray] = useState<RippleArrayType[]>([])
    const ref = useRef<HTMLButtonElement>(null)
    const mouse = useMouse(ref.current)
    // 点击
    const onMouseDown = () => {
        const newRipple = cloneDeep(rippleArray)
        if (newRipple && newRipple.length > 3) {
            newRipple.shift()
        }
        newRipple.push({
            key: +new Date(),
            Xy: {
                top: mouse.elementY - 50,
                left: mouse.elementX - 50
            }
        })
        setRippleArray(newRipple)
    }

    // 此处注意利用key值来区别开涟漪气泡
    return (
        <FOButton
            {...props}
            style={{ ...style }}
            onMouseDown={onMouseDown}
            ref={ref}
            variant={variant}
            radio={radio}
            disabled={disabled}
        >
            {children}
            <span className="FOButton-root">
                {rippleArray.map((tit) => (
                    <Ripple key={tit.key} Xy={tit.Xy} />
                ))}
            </span>
        </FOButton>
    )
}

export default Button
