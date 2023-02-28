import React, { FC, useState } from 'react'
import styled from 'styled-components'
import { primaryColorSystem } from '../style'
import type { FOInputProps } from './input'

/**
 * FOInput
 */
const FOWrapper = styled.div<FOInputProps>`
    position: relative;
    display: inline-block;
    padding: 4px 11px;
    width: calc(100% - 24px);
    min-width: 0;
    ${(props) =>
        props.disabled
            ? `
 color:#00000040;
 background-color:#f5f5f5;
 cursor:not-allowed;
 `
            : `
 color:#000000d9;
 background-color:#fff;
 cursor:auto;
 `}

    font-size: 14px;
    line-height: 1.5715;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all 0.3s;
    display: inline-flex;
    &:hover {
        border-color: ${(props) => (props.disabled ? '#d9d9d9' : `${primaryColorSystem.FOBLUE}`)};
        outline: none;
    }
    & > span {
        display: flex;
        flex: none;
        align-items: center;
    }

    &:focus-within {
        border-color: ${primaryColorSystem.FOBLUE};
        box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
`
const FOInput = styled.input<FOInputProps>`
    box-sizing: border-box;
    margin: 0;
    font-variant: tabular-nums;
    list-style: none;
    font-feature-settings: 'tnum';
    position: relative;
    display: inline-block;
    width: 100%;
    min-width: 0;
    padding: 4px 11px;
    font-size: 14px;
    line-height: 1.5715;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 2px;
    transition: all 0.3s;
    font-size: inherit;
    border: none;
    outline: none;
    padding: 0;
    &::-webkit-input-placeholder {
        color: #d9d9d9;
        font-size: 14px;
    }
    ${(props) =>
        props.disabled
            ? `
color:#00000040;
background-color:#f5f5f5;
cursor:not-allowed;
`
            : `
color:#000000d9;
background-color:#fff;
cursor:auto;
`}
`
const FOSpan = styled.span<any>`
    ${(props) => {
        switch (props.name) {
            case 'prefix':
                return 'margin-right: 4px;'
                break
            case 'suffix':
                return 'margin-left: 4px;'
                break
            case 'showCount':
                return 'margin-right: 8px;color: #00000040;'
                break
            default:
                break
        }
    }}
`

const Input: FC<FOInputProps> = (props: FOInputProps) => {
    const { disabled, prefix, suffix, defaultValue, onChange, placeholder, maxLength, showCount } =
        props
    const [valueLength, setValueLength] = useState(0)

    return (
        <div>
            <FOWrapper disabled={disabled}>
                {prefix && <FOSpan name="prefix">{prefix}</FOSpan>}
                <FOInput
                    type="text"
                    disabled={disabled}
                    defaultValue={defaultValue}
                    onChange={(e) => {
                        setValueLength(e.target.value.length)
                        return onChange && onChange(e)
                    }}
                    placeholder={placeholder}
                    maxLength={maxLength}
                />
                {showCount && (
                    <FOSpan name="showCount">
                        {valueLength} / {maxLength}
                    </FOSpan>
                )}
                {suffix && <FOSpan name="suffix">{suffix}</FOSpan>}
            </FOWrapper>
        </div>
    )
}

export default Input
