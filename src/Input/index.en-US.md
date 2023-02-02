# Input 输入框

```jsx
import { Input } from 'FOundUI'
export default () => {
    return (
        <>
            <div style={{ width: '30%' }}>
                <Input disabled={true} prefix="￥" suffix="RMB" />
                <br />

                <Input />
                <br />

                <Input />
            </div>
        </>
    )
}
```

```jsx
import { Input } from 'FOundUI'
export default () => {
    return (
        <div style={{ width: '30%' }}>
            <Input prefix="￥" suffix="RMB" placeholder="input placeholder" />

            <br />
            <Input prefix="$" suffix="$" maxLength={20} showCount />
            <br />

            <Input prefix="email" suffix="@qq.com" />
        </div>
    )
}
```

```jsx
import { Input } from 'FOundUI'
export default () => {
    const onChange = (e) => {
        console.log(e?.target?.value)
    }

    return (
        <div style={{ width: '30%' }}>
            <Input onChange={onChange} maxLength={20} showCount />
        </div>
    )
}
```

## API

#### Row

| 参数         | 说明                   | 类型        | 默认值 |
| ------------ | ---------------------- | ----------- | ------ | --- |
| defaultValue | 默认值                 | string      | number | \_  |
| placeholder  | 提示信息               | string      | \_     |
| maxLength    | 最大长度               | number      | \_     |
| showCount    | 是否展示字数           | boolean     | false  |
| prefix       | 带有前缀图标的 input   | ReactNode   | \_     |
| suffix       | 带有后缀图标的 input   | ReactNode   | \_     |
| disabled     | 是否禁用               | boolean     | false  |
| onChange     | 输入框内容变化时的回调 | function(e) | \_     |
