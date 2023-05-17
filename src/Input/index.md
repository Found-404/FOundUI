# Input - 输入框

## 基本使用

基本用法

```jsx
import { Input } from 'FOundUI'

export default () => {
    return (
        <>
            <Input></Input>
        </>
    )
}
```

## 三种大小

输入框定义了三种尺寸（大、默认、小），高度分别为 40px、32px 和 24px

```jsx
import { Input, Space } from 'FOundUI'

export default () => {
    return (
        <Space direction="vertical">
            <Input size="large"></Input>
            <Input></Input>
            <Input size="small"></Input>
        </Space>
    )
}
```

## 搜索按钮

可配置是否带有搜索按钮，并且可以自定义文字

```jsx
import { Input, Space } from 'FOundUI'

export default () => {
    return (
        <Space direction="vertical">
            <Input enterButton={true}></Input>
            <Input enterButton={'search item'}></Input>
            <Input enterButton={'search title'}></Input>
        </Space>
    )
}
```

## 最大长度 | 数字提示

可限制输入框内容的最大长度和展示数字提示

```jsx
import { Input, Space } from 'FOundUI'

export default () => {
    return (
        <Space direction="vertical">
            <Input maxLength={10} enterButton={true}></Input>
            <Input maxLength={10}></Input>
            <Input maxLength={20}></Input>
            <Input enterButton={true} showCount></Input>
        </Space>
    )
}
```

## 输入框类型

可配置数字输入框，密码输入框

```jsx
import { Input, Space } from 'FOundUI'

export default () => {
    return (
        <Space direction="vertical">
            <Input type="number"></Input>
            <Input type="password"></Input>
        </Space>
    )
}
```

## 搜索按钮回调

点击搜索按钮或者按下回车时的回调

```jsx
import { Input, Space } from 'FOundUI'

export default () => {
    return (
        <Space direction="vertical">
            <Input
                enterButton={true}
                onSearch={(value) => {
                    console.log(value)
                }}
            ></Input>
            <Input
                enterButton={'search item'}
                onSearch={(value) => {
                    console.log(value)
                }}
            ></Input>
            <Input
                enterButton={'search title'}
                onSearch={(value) => {
                    console.log(value)
                }}
            ></Input>
        </Space>
    )
}
```

## 输入框内容变化时的回调

```jsx
import { Input, Space } from 'FOundUI'

export default () => {
    return (
        <Space direction="vertical">
            <Input
                onChange={(value) => {
                    console.log(value)
                }}
            ></Input>
            <Input
                onChange={(value) => {
                    console.log(value)
                }}
            ></Input>
            <Input
                onChange={(value) => {
                    console.log(value)
                }}
            ></Input>
        </Space>
    )
}
```

## API

属性如下

| 参数        | 说明                               | 类型                      | 默认值   |
| ----------- | ---------------------------------- | ------------------------- | -------- | --- |
| allowClear  | 是否可以清除                       | boolean                   | true     |
| size        | 输入框大小                         | `large` ,`middle`,`small` | `middle` |
| enterButton | 是否有确认按钮，可设为按钮文字     | boolean                   | string   | -   |
| maxLength   | 输入框内容的最大长度               | number                    | -        |
| showCount   | 是否展示字数                       | boolean                   | false    |
| type        | 输入框类型，数字 密码              | `number`,`password`       | -        |
| onSearch    | 点击搜索图标，或按下回车键时的回调 | `function(value)`         | -        |
| onChange    | 输入框内容变化时的回调             | `function(value)`         | -        |
