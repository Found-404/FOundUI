# Button

:::warning{title=开发中}
BUTTON 组件处于开发阶段
:::

## 默认按钮

具有涟漪效果的按钮

```jsx
import { Button } from 'FOundUI'

export default () => {
    return (
        <>
            <Button variant="text">TEXT</Button>
            <Button variant="contained" style={{ margin: '0 20px' }}>
                CONTAINED
            </Button>
            <Button variant="outlined">OUTLINED</Button>
        </>
    )
}
```

## 胶囊按钮

更改圆角大小后的普通按钮而已

```jsx
import { Button } from 'FOundUI'

export default () => {
    return (
        <>
            <Button variant="text" radio>
                TEXT
            </Button>
            <Button variant="contained" style={{ margin: '0 20px' }} radio>
                CONTAINED
            </Button>
            <Button variant="outlined" radio>
                OUTLINED
            </Button>
        </>
    )
}
```

## 禁用按钮

禁用之后的按钮不可操作

```jsx
import { Button } from 'FOundUI'

export default () => {
    return (
        <>
            <Button variant="text" disabled>
                TEXT
            </Button>
            <Button variant="contained" style={{ margin: '0 20px' }} disabled>
                CONTAINED
            </Button>
            <Button variant="outlined" disabled>
                OUTLINED
            </Button>
            <br />
            <br />
            <Button variant="text" disabled radio>
                TEXT
            </Button>
            <Button variant="contained" style={{ margin: '0 20px' }} disabled radio>
                CONTAINED
            </Button>
            <Button variant="outlined" disabled radio>
                OUTLINED
            </Button>
        </>
    )
}
```

## 不同尺寸按钮

三种标准大小的按钮

## 图标按钮

图标按钮跟默认按钮一致默认三种样式,仅仅是变成圆形居中图标之分

## API

| 参数     | 说明     | 类型    | 默认值 |
| -------- | -------- | ------- | ------ |
| variant  | 按钮类型 | string  | "text" |
| radio    | 胶囊按钮 | boolean | false  |
| disabled | 禁用按钮 | boolean | false  |
