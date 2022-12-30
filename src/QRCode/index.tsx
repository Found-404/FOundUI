import QRcode from 'qrcode.react'
import React, { FC } from 'react'
import styled from 'styled-components'

interface FOSpanProps {
    status: 'loading' | 'expired'
}
// 组件styledCss
const FOQRCode = styled.div`
    position: relative;
    display: inline-block;
    width: 154px;
    height: 154px;
    padding: 12px;
    border-radius: 8px;
    border: 1px solid rgba(5, 5, 5, 0.06);
    box-sizing: border-box;
`
const FOspan = styled.div<FOSpanProps>`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    text-align: center;
    line-height: 152px;
    border-radius: 8px;
    background: ${(props) => (props.status ? 'rgba(255,255,255,.96)' : '')};
`
// 组件PropsType
interface QRCodeprops {
    children: any
    value: string
    icon: string
    fgColor: string
    bgColor: string
    style: any
    status: 'loading' | 'expired'
    size: number
}
const downloadQRCode = () => {
    const canvasImg = document.getElementById('qrCode') as HTMLCanvasElement // 获取canvas类型的二维码
    if (canvasImg) {
        const src = canvasImg.toDataURL('image/png') // 将canvas对象转换为图片的data url
        const a = document.createElement('a')
        a.href = src
        a.download = '二维码' // 图片name
        document.body.appendChild(a)
        a.click()
        document.body.removeChild(a)
    }
}
export { downloadQRCode }

const QRCode: FC<QRCodeprops> = (props) => {
    const { value, icon, fgColor, style, bgColor, status, size } = props
    return (
        <FOQRCode style={{ backgroundColor: bgColor, ...style }}>
            {/* 遮罩层 */}
            {status === 'loading' ? (
                <FOspan status={status}>
                    <div>
                        <i>图标</i>
                    </div>
                </FOspan>
            ) : (
                ''
            )}
            {status === 'expired' ? (
                <FOspan status={status}>
                    <div>
                        <span>二维码过期</span>
                        <i>图标</i>
                    </div>
                </FOspan>
            ) : (
                ''
            )}
            <QRcode
                id="qrCode"
                value={value}
                bgColor={bgColor}
                fgColor={fgColor} // 二维码的颜色
                size={size}
                imageSettings={{
                    // 二维码中间的logo图片
                    src: icon,
                    height: 20,
                    width: 20,
                    excavate: true // 中间图片所在的位置是否镂空
                }}
            />
        </FOQRCode>
    )
}

export default QRCode
