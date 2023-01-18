import React, { FC, ReactNode, useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

import { primaryColorSystem } from '../style'

interface DropdownProps {
    children?: ReactNode
    style?: React.CSSProperties
    menu: liProps[]
    open?: boolean
    placement?: 'bottomLeft' | 'bottom' | 'bottomRight' | 'topLeft' | 'top' | 'topRight'
    trigger?: 'hover' | 'click'
    overlayClassName?: string
    overlayStyle?: React.CSSProperties
    disabled?: boolean
    onOpenChange?: (open: boolean) => void
    onOpenClick?: (key: string | number) => void
}

const GCDropdown = styled.div`
    position: relative;
    margin: 0 10px;
    display: inline-block;
`
interface menuType {
    placement?: 'bottomLeft' | 'bottom' | 'bottomRight' | 'topLeft' | 'top' | 'topRight'
}
const GCMenu = styled.div<menuType>`
    position: absolute;
    z-index: 1000;
    left: ${(props) =>
        props.placement === 'bottomLeft' || props.placement === 'topLeft' ? 0 : ''};

    right: ${(props) =>
        props.placement === 'bottomRight' || props.placement === 'topRight' ? 0 : ''};
    bottom: ${(props) =>
        props.placement === 'topLeft' || props.placement === 'topRight' || props.placement === 'top'
            ? '100%'
            : ''};

    transition: all 0.5s;
    max-height: 0px;
    overflow: hidden;
    margin-bottom: ${(props) =>
        props.placement === 'topLeft' || props.placement === 'topRight' || props.placement === 'top'
            ? '3px'
            : '0'};
    margin-top: 3px;
    border-radius: 4px;

    background: #fff;
    box-shadow: 0 6px 16px 0 rgb(0 0 0 / 8%), 0 3px 6px -4px rgb(0 0 0 / 12%),
        0 9px 28px 8px rgb(0 0 0 / 5%);
`

const GCUl = styled.ul`
    position: relative;
    margin: 0;
    padding: 4px 0;
    text-align: left;
    list-style-type: none;
    background-color: #fff;
    background-clip: padding-box;
    border-radius: 2px;
    outline: none;
    box-shadow: 0 3px 6px -4px rgb(0 0 0 / 12%), 0 6px 16px 0 rgb(0 0 0 / 8%),
        0 9px 28px 8px rgb(0 0 0 / 5%);
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
    const GCMenuRef = useRef<HTMLDivElement>(null)
    const GCCountRef = useRef<HTMLSpanElement>(null)

    const {
        children,
        style,
        menu,
        open,
        placement,
        trigger = 'hover',
        overlayClassName,
        overlayStyle,
        onOpenChange,
        onOpenClick
    } = props
    // children.props.style={color:'red'}

    // 控制菜单显示隐藏
    const [isOpen, setIsOpen] = useState<boolean>(open || false)
    // 控制显隐的样式
    const [openStyles, setOpenStyles] = useState<any>()
    useEffect(() => {
        if (isOpen) {
            setOpenStyles({
                ...openStyles,
                maxHeight: '500px'
            })
        } else {
            setOpenStyles({
                ...openStyles,
                maxHeight: '0px'
            })
        }
        if (onOpenChange) {
            onOpenChange(isOpen)
        }
    }, [isOpen])
    // 设置left值
    useEffect(() => {
        // 获取对应的left值
        if (placement === 'bottom' || placement === 'top') {
            let left =
                ((GCCountRef.current?.clientWidth || 0) - (GCMenuRef.current?.clientWidth || 0)) / 2
            setOpenStyles({
                ...openStyles,
                left: left + 'px',
                maxHeight: open ? '500px' : '0px'
            })
        }
    }, [])

    // li的点击事件
    const GCliClick = (index: number) => {
        // 如果当前选项禁用
        if (menu[index]?.disabled) {
            return
        }
        if (onOpenClick) {
            onOpenClick(menu[index]?.key as string | number)
        }
        setIsOpen(false)
    }
    return (
        <GCDropdown {...props} style={{ ...style }}>
            <span
                style={{
                    display: 'inline-block'
                }}
                ref={GCCountRef}
                onMouseEnter={(e) => {
                    e.stopPropagation()
                    if (trigger === 'hover') setIsOpen(true)
                }}
                onMouseLeave={(e) => {
                    e.stopPropagation()
                    if (trigger === 'hover') setIsOpen(false)
                }}
                onClick={() => {
                    if (trigger === 'click') setIsOpen(!isOpen)
                }}
            >
                {children}

                <GCMenu
                    className={overlayClassName}
                    placement={placement}
                    style={{
                        ...openStyles,
                        ...overlayStyle
                    }}
                    ref={GCMenuRef}
                >
                    <GCUl>
                        {menu.map((item, index) => {
                            return (
                                <GCLi
                                    disabled={item.disabled}
                                    danger={item.danger}
                                    key={item.key}
                                    onClick={(e) => {
                                        e.stopPropagation()
                                        GCliClick(index)
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
