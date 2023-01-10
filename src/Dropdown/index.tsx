import React, { FC, ReactNode, useEffect, useState } from 'react'
import styled from 'styled-components'

import { primaryColorSystem } from '../style'

interface DropdownProps {
    children?: string
    style?: React.CSSProperties
    menu: liProps[]
    open?: boolean
    placement?: 'bottomLeft' | 'bottom' | 'bottomRight' | 'topLeft' | 'top' | 'topRight'
}

const GCDropdown = styled.div`
    position: relative;
    margin: 0 10px;
`
interface menuType {
    placement?: 'bottomLeft' | 'bottom' | 'bottomRight' | 'topLeft' | 'top' | 'topRight'
}
const GCMenu = styled.div<menuType>`
    position: absolute;
    z-index: 1000;
    left: ${(props) =>
        props.placement === 'bottomLeft' || props.placement === 'topLeft'
            ? 0
            : props.placement === 'bottom' || props.placement === 'top'
            ? '-50%'
            : ''};

    right: ${(props) =>
        props.placement === 'bottomRight' || props.placement === 'topRight' ? 0 : ''};
    bottom: ${(props) =>
        props.placement === 'topLeft' || props.placement === 'topRight' || props.placement === 'top'
            ? '100%'
            : ''};
    background: #fff;
    box-shadow: 0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%),
        0 9px 28px 8px rgb(0 0 0 / 5%);
    border-radius: 8px;
    transition: all 0.4s;
    max-height: 0px;
    overflow: hidden;
`
const GCUl = styled.ul`
    padding-inline-start: 0px;
    margin-block-start: 0;
    margin-block-end: 0;
    padding: 4px;
    transition: all 0.3s;
`
interface liProps {
    danger?: boolean
    disabled?: boolean
    key?: string | number
    label?: ReactNode | string
}
const GCLi = styled.li<liProps>`
    list-style: none;
    padding: 5px 12px;
    border-radius: 4px;
    font-weight: normal;
    font-size: 14px;
    white-space: nowrap;
    cursor: ${(props) => (props.disabled ? 'no-drop' : 'pointer')};
    transition: all 0.2s;
    color: ${(props) =>
        props.disabled ? primaryColorSystem.FOGREY : props.danger ? primaryColorSystem.FORED : ''};
    &:hover {
        background-color: ${(props) =>
            props.disabled
                ? 'none'
                : props.danger
                ? primaryColorSystem.FORED
                : primaryColorSystem.FOGREY};
        color: ${(props) => (props.danger ? '#fff' : 'none')};
    }
`

const Dropdown: FC<DropdownProps> = (props) => {
    const { children, style, menu, open, placement } = props
    // 控制菜单显示隐藏
    const [isOpen, setIsOpen] = useState<boolean>(open || false)
    // 控制显隐的样式
    const [openStyles, setOpenStyles] = useState<any>()
    useEffect(() => {
        if (isOpen) {
            setOpenStyles({
                maxHeight: '500px'
            })
        } else {
            setOpenStyles({
                maxHeight: '0px'
            })
        }
    }, [isOpen])
    return (
        <GCDropdown {...props} style={{ ...style }}>
            <span
                onMouseEnter={() => {
                    setIsOpen(!isOpen)
                }}
                onMouseLeave={() => {
                    setIsOpen(!isOpen)
                }}
            >
                {children}
                <GCMenu
                    placement={placement}
                    style={{
                        ...openStyles
                    }}
                >
                    <GCUl>
                        {menu.map((item) => {
                            return (
                                <GCLi
                                    disabled={item.disabled}
                                    danger={item.danger}
                                    key={item.key}
                                    onMouseEnter={() => {
                                        setIsOpen(true)
                                    }}
                                >
                                    {item.label}
                                </GCLi>
                            )
                        })}
                    </GCUl>
                </GCMenu>
            </span>
        </GCDropdown>
    )
}

export default Dropdown
