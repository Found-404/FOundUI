# SpaceButton

## Basic Usage - Horizontal Spacing

```jsx
import { Button, Space } from 'FOundUI'

export default () => {
    return (
        <Space>
            <Button variant="contained">Button1</Button>
            <Button variant="contained">Button2</Button>
            <Button variant="contained">Button3</Button>
        </Space>
    )
}
```

## Basic Usage - Vertical Spacing

```jsx
import { Button, Space } from 'FOundUI'

export default () => {
    return (
        <Space direction="vertical">
            <Button variant="contained">Button1</Button>
            <Button variant="contained">Button2</Button>
            <Button variant="contained">Button3</Button>
        </Space>
    )
}
```

## Spacing Size

Preset three sizes: large, medium, and small.
Set the spacing to large and medium by setting the size to large middle. If size is not set, the spacing is small.

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
                <Button variant="contained">Button1</Button>
                <Button variant="contained">Button2</Button>
                <Button variant="contained">Button3</Button>
            </Space>
        </>
    )
}
```

## Autowrap

```jsx
import { Button, Space } from 'FOundUI'

export default () => {
    return (
        <Space wrap>
            {new Array(20).fill(null).map((_, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <Button key={index} variant="contained">Button</Button>
            ))}
        </Space>
    )
}
```


| 参数             | 说明                                                                         | 类型                    | 默认值     |
| ---------------- | ---------------------------------------------------------------------------- | ----------------------- | ---------- |
| trigger          | Trigger Dropdown Behavior                                                  | `horizontal`,`vertical`     | horizontal    |
| size              |    Spacing Size                                                          | [Size[]](#Size)                   | small   |
| wrap              | Whether to automatically wrap, only valid when `horizontal`                 | `boolean`             | false    |



### Size
`small` | `middle` | `large` | `number`