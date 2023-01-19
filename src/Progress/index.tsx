import React, { FC } from 'react'
import styled from 'styled-components'
import { primaryColorSystem } from '../style'
import type { FOProgressbgProps, FOProgresstextProps, Progressprops } from './Process'

// 组件styledCss
const FOProgress = styled.div`
    height: 24px;
    display: flex;
`
const FOProgressouter = styled.div`
    width: 100%;
`
const FOProgressinner = styled.div`
    display: inline-block;
    width: 100%;
    background: #f5f5f5;
    border-radius: 100px;
`
const FOProgressbg = styled.div<FOProgressbgProps>`
    // background: linear-gradient(to right, rgb(16, 142, 233), rgb(135, 208, 104));
    border-radius: 100px;
    transition: all 0.3s cubic-bezier(0.08, 0.82, 0.17, 1);
    background: ${(props) =>
        props.status === 'success'
            ? primaryColorSystem.FOGREEN
            : props.status === 'warning'
            ? primaryColorSystem.FOGREY
            : props.status === 'exception'
            ? primaryColorSystem.FORED
            : primaryColorSystem.FOBLUE};
`
const FOProgresstext = styled.span<FOProgresstextProps>`
    font-size: 16px;
    line-height: 24px;
    margin-left: 8px;
    color: rgba(0, 0, 0, 0.45);
`

const Progress: FC<Progressprops> = (props) => {
    const { progress = 36, width = 600, strokeWidth = 8, showInfo = true, status } = props

    return (
        <FOProgress style={{ width: width + 'px' }}>
            <FOProgressouter>
                <FOProgressinner>
                    <FOProgressbg
                        style={{
                            width: progress >= 100 ? '100%' : progress + '%',
                            height: strokeWidth + 'px'
                        }}
                        status={status}
                    ></FOProgressbg>
                </FOProgressinner>
            </FOProgressouter>
            <FOProgresstext showInfo={showInfo}>{progress >= 100 ? 100 : progress}%</FOProgresstext>
        </FOProgress>
    )
}

export default Progress
