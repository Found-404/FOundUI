import React, { useState } from 'react'
import styled from 'styled-components'
import { primaryColorSystem } from '../style/primaryColor'

interface propsType {
    allowClear?: boolean // 是否可以清除
    size?: 'large' | 'middle' | 'small' // 大小
    enterButton?: boolean | string // 是否有确认按钮，可设为按钮文字
    maxLength?: number // 最大长度
    showCount?: boolean // 是否展示字数
    type?: 'number' | 'password' // 输入框类型，数字 密码
    onSearch?: (value?: string) => void // 点击搜索图标，或按下回车键时的回调
    onChange?: (value?: string) => void // 输入框内容变化时的回调
}

const InInput = styled.input<{
    enterButton?: boolean | string
}>`
    :focus {
        outline: 1px solid ${primaryColorSystem.FOBLUE};
        border-color: ${primaryColorSystem.FOBLUE};
        transition: all 0.2s;
    }
    :hover {
        border-color: ${primaryColorSystem.FOBLUE};
        transition: all 0.2s;
    }
    color: ${primaryColorSystem.FOBLUE};
    box-sizing: border-box;
    margin: 0;
    outline: none;
    padding: 4px 11px;
    color: rgba(0, 0, 0, 0.88);
    font-size: 14px;
    line-height: 1.5714285714285714;
    list-style: none;
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    background-color: #ffffff;
    background-image: none;
    border-width: 1px;
    border-style: solid;
    border-color: ${primaryColorSystem.FOGREY};
    border-radius: ${({ enterButton }) => (enterButton ? '6px 0 0 6px' : '6px')};
    transition: all 0.2s;
    &.found-input-size-large {
        padding: 7px 11px;
        font-size: 16px;
        line-height: 1.5;
        border-radius: ${({ enterButton }) => (enterButton ? '8px 0 0 8px' : '8px')};
    }
    &.found-input-size-small {
        padding: 0px 7px;
        border-radius: ${({ enterButton }) => (enterButton ? '4px 0 0 4px' : '4px')};
    }
`

const InDiv = styled.div<{
    size?: string
    showCount?: boolean
}>`
    display: flex;
    .found-input-search {
        border: 1px solid ${primaryColorSystem.FOGREY};
        border-left: none;
        outline: none;
        cursor: pointer;
        border-radius: ${({ size }) => {
            switch (size) {
                case 'large':
                    return '0 8px 8px 0'
                case 'small':
                    return '0 4px 4px 0'
                default:
                    return '0 6px 6px 0'
            }
        }};
        background-color: ${primaryColorSystem.FOBLUE};
        color: #fff;
    }
`

// 通过大小获取类名
const sizeClass = (size: string) => {
    switch (size) {
        case 'large':
            return 'found-input-size-large'
        case 'middle':
            return 'found-input-size-middle'
        case 'small':
            return 'found-input-size-small'
    }
}

export default (props: propsType) => {
    const {
        allowClear = true,
        size = 'middle',
        enterButton,
        maxLength,
        type,
        showCount,
        onSearch,
        onChange
    } = props

    const [value, setValue] = useState<string>('')

    const classNames = [sizeClass(size)]

    return (
        <>
            <InDiv className="found-input" size={size} showCount={showCount}>
                <InInput
                    enterButton={enterButton}
                    type={type ? type : allowClear ? 'search' : ''}
                    className={classNames?.join(' ')}
                    placeholder="place Enter"
                    value={value}
                    maxLength={maxLength}
                    onChange={(e: any) => {
                        setValue(e?.target?.value)
                        if (onChange) {
                            onChange!(e?.target?.value)
                        }
                    }}
                />
                {enterButton && (
                    <input
                        className="found-input-search"
                        type="button"
                        value={typeof enterButton === 'boolean' ? 'Search' : enterButton}
                        onClick={() => {
                            if (onSearch) {
                                onSearch!(value)
                            }
                        }}
                    />
                )}
            </InDiv>
            {(showCount || maxLength) && (
                <span style={{ textAlign: 'right' }} className="fount-input-count">
                    {maxLength ? value?.length + ' / ' + maxLength : value?.length}
                </span>
            )}
        </>
    )
}
