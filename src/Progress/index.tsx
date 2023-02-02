import React, { FC } from 'react'
import styled from 'styled-components'
import { primaryColorSystem } from '../style'
import type {
    FOProgressbgProps,
    FOProgresscircleProps,
    FOProgressProps,
    FOProgresstextProps,
    Progressprops
} from './Process'

// 组件styledCss
const FOProgress = styled.div<FOProgressProps>`
    display: ${(props) => (props.type === 'line' ? 'flex' : 'inline-block')};
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
const FOProgresscircle = styled.circle<FOProgresscircleProps>`
    fill: none;
    stroke: ${(props) =>
        props.status === 'success'
            ? primaryColorSystem.FOGREEN
            : props.status === 'warning'
            ? primaryColorSystem.FOGREY
            : props.status === 'exception'
            ? primaryColorSystem.FORED
            : primaryColorSystem.FOBLUE};
    stroke-width: 8;
    stroke-dasharray: 314;
    stroke-dashoffset: ${(props) => 314 - props.progress * 3.14};
    transition: all 0.3s cubic-bezier(0.08, 0.82, 0.17, 1);
    stroke-linecap: round;
    transform: rotate(-90deg);
    transform-origin: center;
    transform-box: fill-box;
`
const Progress: FC<Progressprops> = (props) => {
    const {
        progress = 36,
        width = 600,
        strokeWidth = 8,
        showInfo = true,
        status,
        type = 'line'
    } = props

    return (
        <FOProgress style={{ width: width + 'px' }} type={type}>
            {type === 'line' ? (
                <>
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
                    <FOProgresstext showInfo={showInfo}>
                        {progress >= 100 ? 100 : progress}%
                    </FOProgresstext>
                </>
            ) : (
                <svg style={{ width: width + 'px', height: width + 'px' }}>
                    <FOProgresscircle
                        cx="56"
                        cy="56"
                        r="50"
                        stroke="#7C83FD"
                        progress={progress}
                        status={status}
                    ></FOProgresscircle>
                    <text x="56" y="62" fill="#6b778c" textAnchor="middle">
                        <tspan>{progress}</tspan>
                        <tspan>%</tspan>
                    </text>
                </svg>
            )}
        </FOProgress>
    )
}

export default Progress
