# Space 间距

## 基本用法-水平间距

```jsx
import { Button, Space } from 'FOundUI'

export default () => {
    return (
        <Space>
            <Button variant="contained">按钮1</Button>
            <Button variant="contained">按钮2</Button>
            <Button variant="contained">按钮3</Button>
        </Space>
    )
}
```

## 基本用法-垂直间距

```jsx
import { Button, Space } from 'FOundUI'

export default () => {
    return (
        <Space direction="vertical">
            <Button variant="contained">按钮1</Button>
            <Button variant="contained">按钮2</Button>
            <Button variant="contained">按钮3</Button>
        </Space>
    )
}
```

## 间距大小

预设大 、 中 、 小三种大小。
通过设置 size 为 large middle 分别把间距设为大、中间距。若不设置 size，则间距为小。

```jsx
import { Button, Space } from 'FOundUI'
import { useState } from 'react'

export default () => {
    const [size, setSize] = useState('small')
    const onChange = (e) => {
        setSize(e?.target?.value)
    }
    return (
        <>
            <div
                style={{
                    marginBottom: '20px',
                    display: 'flex',
                    gap: '8px'
                }}
            >
                <label>
                    <input onChange={onChange} type="radio" name="radio" value="small"></input>
                    small
                </label>
                <label>
                    <input onChange={onChange} type="radio" name="radio" value="middle"></input>
                    middle
                </label>
                <label>
                    <input onChange={onChange} type="radio" name="radio" value="large"></input>
                    large
                </label>
            </div>
            <Space size={size}>
                <Button variant="contained">按钮1</Button>
                <Button variant="contained">按钮2</Button>
                <Button variant="contained">按钮3</Button>
            </Space>
        </>
    )
}
```

## 自动换行

```jsx
import { Button, Space } from 'FOundUI'

export default () => {
    return (
        <Space wrap>
            {new Array(20).fill(null).map((_, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Button key={index} variant="contained">按钮</Button>
            ))}
        </Space>
    )
}
```


| 参数             | 说明                                                                         | 类型                    | 默认值     |
| ---------------- | ---------------------------------------------------------------------------- | ----------------------- | ---------- |
| trigger          | 触发下拉的行为                                                   | `horizontal`,`vertical`         | horizontal    |
| size              | 间距大小                                                        | [Size[]](#Size)                   | small   |
| wrap              | 是否自动换行，仅在 `horizontal` 时有效                            | `boolean`                          | false    |



### Size
`small` | `middle` | `large` | `number`