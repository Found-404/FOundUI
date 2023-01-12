# QRCode

:::warning{title=待定组件}
QRCode 组件尚且处于待定状态
:::

## 基本使用

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
                fgColor={primaryColorSystem.FORANGE}
                // bgColor={primaryColorSystem.FORANGE}
                style={{ marginLeft: '20px' }}
            ></QRCode>
            <QRCode
                value="我会出手"
                ramp={[primaryColorSystem.FOGREEN, primaryColorSystem.FORCYRN]}
            ></QRCode>
        </>
    )
}
```

## 不同状态

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

## 二维码下载

```jsx
import { QRCode, downloadQRCode, Button } from 'FOundUI'
export default () => {
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

## 高级用法

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

| 参数    | 说明          | 类型                | 默认值  |
| ------- | ------------- | ------------------- | ------- |
| value   | code 内容     | string              | text    |
| icon    | code 图标     | string              | null    |
| fgColor | code 颜色     | string(CSS color)   | #000000 |
| bgColor | code 背景颜色 | string(CSS color)   | #FFFFFF |
| status  | code 状态     | loading/expired     | null    |
| size    | code 宽高     | number              | 128     |
| ramp    | code 颜色渐变 | string[(CSS color)] | null    |
