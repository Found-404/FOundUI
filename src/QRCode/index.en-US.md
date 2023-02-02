# QRCode

:::warning{title=待定组件}
QRCode 组件尚且处于待定状态
:::

## Basic use

This is an example component.

```jsx
import { QRCode } from 'FOundUI'
import { primaryColorSystem } from '../style'
export default () => {
    return (
        <>
            <QRCode value="我会出手"></QRCode>
            <QRCode
                value="我会出手"
                icon="https://found-img-blog.oss-cn-hangzhou.aliyuncs.com/img/logo2.0.png"
            ></QRCode>
            <QRCode
                value="我会出手"
                fgColor={primaryColorSystem.FOBLUE}
                bgColor={primaryColorSystem.FORED}
                style={{ marginLeft: '20px' }}
            ></QRCode>
        </>
    )
}
```

## Different states

```jsx
import { QRCode } from 'FOundUI'
export default () => {
    return (
        <>
            <QRCode value="我会出手" status="loading"></QRCode>
            <QRCode value="我会出手" status="expired"></QRCode>
        </>
    )
}
```

## QR code download

```jsx
import { QRCode, Button } from 'FOundUI'
export default () => {
    const downloadQRCode = () => {
        const canvasImg = document.getElementById('qrCode') // 获取canvas类型的二维码
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

    return (
        <>
            <QRCode value="我会出手"></QRCode>
            <Button variant="text" onClick={downloadQRCode}>
                Download
            </Button>
        </>
    )
}
```

## Advanced Usage

```jsx
import { QRCode } from 'FOundUI'
export default () => {
    return (
        <>
            <QRCode value="我会出手"></QRCode>
        </>
    )
}
```

## API
