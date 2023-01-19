# Progress

:::warning{title=开发中}
Dropdown 组件处于开发阶段
:::

## 基本使用

This is an example component.

```jsx
import { Progress } from 'FOundUI'

export default () => {
    return (
        <>
            <Progress progress={50} width="600"></Progress>
            <Progress progress={60} width="600" status="success"></Progress>
            <Progress progress={70} width="600" status="warning"></Progress>
            <Progress progress={80} width="600" status="exception"></Progress>
        </>
    )
}
```

## 动态使用

```jsx
import { Progress, Button } from 'FOundUI'
import { useState } from 'react'
export default () => {
    const [percent, setPercent] = useState(30)
    const increase = () => {
        setPercent((prevPercent) => {
            const newPercent = prevPercent + 10
            if (newPercent > 100) {
                return 100
            }
            return newPercent
        })
    }
    const decline = () => {
        setPercent((prevPercent) => {
            const newPercent = prevPercent - 10
            if (newPercent < 0) {
                return 0
            }
            return newPercent
        })
    }
    return (
        <>
            <Progress progress={percent} width="600"></Progress>
            <Progress progress={percent + 10} width="600" status="success"></Progress>
            <Progress progress={percent + 20} width="600" status="warning"></Progress>
            <Progress progress={percent + 30} width="600" status="exception"></Progress>
            <Button variant="outlined" onClick={decline}>
                -
            </Button>
            <Button variant="outlined" onClick={increase}>
                +
            </Button>
        </>
    )
}
```

## API

| 参数        | 说明           | 类型                                | 默认值 |
| ----------- | -------------- | ----------------------------------- | ------ |
| progress    | 当前进度       | number/string                       | 36     |
| width       | 进度条总宽度   | number/string                       | 600    |
| strokeWidth | 进度条线的宽度 | number/string                       | 8      |
| showInfo    | 状态图标       | boolean                             | true   |
| status      | 进度条状态     | 'success' / 'warning' / 'exception' | null   |
