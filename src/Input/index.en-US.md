# Input

## Basic Use

usage

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

## Three sizes

The input box defines three sizes (large, default, and small), with heights of 40px, 32px, and 24px, respectively

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

## search button

Configurable with search button and customizable text

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

## Maximum length | Number prompt

Can limit the maximum length of input box content and display numerical prompts

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

## Input box type

Configurable number input box, password input box

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

## Search button callback

Callback when clicking the search button or pressing Enter

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

## Callback when the content of the input box changes

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

The attributes are as follows

| 参数        | 说明                                                                | 类型                      | 默认值   |
| ----------- | ------------------------------------------------------------------- | ------------------------- | -------- | --- |
| allowClear  | Can it be cleared                                                   | boolean                   | true     |
| size        | Input box size                                                      | `large` ,`middle`,`small` | `middle` |
| enterButton | Is there a confirmation button that can be set as button text       | boolean                   | string   | -   |
| maxLength   | Maximum length of input box content                                 | number                    | -        |
| showCount   | Whether to display word count                                       | boolean                   | false    |
| type        | Input box type, numeric password                                    | `number`,`password`       | -        |
| onSearch    | Callback when clicking on the search icon or pressing the Enter key | `function(value)`         | -        |
| onChange    | Callback when the content of the input box changes                  | `function(value)`         | -        |
