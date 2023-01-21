# Dropdown

## Basic Usage

The simplest drop-down menu.

```jsx
import { Dropdown, Button } from 'FOundUI'

export default () => {
    const item = [
        {
            key: '1',
            label: <span>1st menu item</span>
        },
        {
            key: '2',
            disabled: true,
            label: <span>2nd menu item</span>
        },
        {
            key: '3',
            danger: true,
            label: '3rd menu item'
        }
    ]
    return (
        <>
            <Dropdown menu={item}>
                <Button variant="contained">Dropdown</Button>
            </Dropdown>
        </>
    )
}
```

## Eject position

Support 6 pop up positions.

```jsx
import { Dropdown, Button } from 'FOundUI'

export default () => {
    const item = [
        {
            key: '1',
            label: <span>1st menu item</span>
        },
        {
            key: '2',
            disabled: true,
            label: <span>2nd menu item</span>
        },
        {
            key: '3',
            danger: true,
            label: '3rd menu item'
        }
    ]
    return (
        <div style={{ display: 'flex' }}>
            <Dropdown menu={item} placement="bottomLeft">
                <Button variant="contained">bottomLeft</Button>
            </Dropdown>
            <Dropdown menu={item} placement="bottom">
                <Button variant="contained">bottom</Button>
            </Dropdown>
            <Dropdown menu={item} placement="bottomRight">
                <Button variant="contained">bottomRight</Button>
            </Dropdown>
            <Dropdown menu={item} placement="topLeft">
                <Button variant="contained">topLeft</Button>
            </Dropdown>
            <Dropdown menu={item} placement="top">
                <Button variant="contained">top</Button>
            </Dropdown>
            <Dropdown menu={item} placement="topRight">
                <Button variant="contained">topRight</Button>
            </Dropdown>
        </div>
    )
}
```

## Trigger pull-down behavior

There are only two temporarily `click` `hover` ，default`hover`。

```jsx
import { Dropdown, Button } from 'FOundUI'

export default () => {
    const item = [
        {
            key: '1',
            label: <span>1st menu item</span>
        },
        {
            key: '2',
            disabled: true,
            label: <span>2nd menu item</span>
        },
        {
            key: '3',
            danger: true,
            label: '3rd menu item'
        }
    ]
    return (
        <>
            <Dropdown menu={item} trigger="click" arrow>
                <Button variant="contained">click</Button>
            </Dropdown>
            <Dropdown menu={item} trigger="hover">
                <Button variant="contained">hover</Button>
            </Dropdown>
        </>
    )
}
```

## Menu Expand Collapse Callback

It will be executed when the menu is expanded or collapsed。

```jsx
import { Dropdown, Button } from 'FOundUI'

export default () => {
    const item = [
        {
            key: '1',
            label: <span>1st menu item</span>
        },
        {
            key: '2',
            disabled: true,
            label: <span>2nd menu item</span>
        },
        {
            key: '3',
            danger: true,
            label: '3rd menu item'
        }
    ]
    return (
        <Dropdown
            menu={item}
            onOpenChange={(open: boolean) => {
                console.log(open)
            }}
        >
            <Button variant="contained">onOpenChange</Button>
        </Dropdown>
    )
}
```

## Menu click callback

Click to execute with single sub-item。

```jsx
import { Dropdown, Button } from 'FOundUI'

export default () => {
    const item = [
        {
            key: '1',
            label: <span>1st menu item</span>
        },
        {
            key: '2',
            disabled: true,
            label: <span>2nd menu item</span>
        },
        {
            key: '3',
            danger: true,
            label: '3rd menu item'
        }
    ]
    return (
        <Dropdown
            menu={item}
            onOpenClick={(key: string | number) => {
                console.log(key)
            }}
        >
            <Button variant="contained">onOpenClick</Button>
        </Dropdown>
    )
}
```

## API

The properties are as follows

<!--
| 参数 | 说明 | 类型 | 默认值 | 版本 |
| --- | --- | --- | --- | --- |
| arrow | 下拉框箭头是否显示 | boolean \| { pointAtCenter: boolean } | false |  |
| autoFocus | 打开后自动聚焦下拉框 | boolean | false | 4.21.0 |
| disabled | 菜单是否禁用 | boolean | - |  |
| destroyPopupOnHide | 关闭后是否销毁 Dropdown | boolean | false |  |
| dropdownRender | 自定义下拉框内容 | (menus: ReactNode) => ReactNode | - | 4.24.0 |
| getPopupContainer | 菜单渲染父节点。默认渲染到 body 上，如果你遇到菜单滚动定位问题，试试修改为滚动的区域，并相对其定位。[示例](https://codepen.io/afc163/pen/zEjNOy?editors=0010) | (triggerNode: HTMLElement) => HTMLElement | () => document.body |  |
| menu | 菜单配置项 | [MenuProps](/components/menu-cn#api) | - | 4.24.0 |
| overlayClassName | 下拉根元素的类名称 | string | - |  |
| overlayStyle | 下拉根元素的样式 | CSSProperties | - |  |
| placement | 菜单弹出位置：`bottom` `bottomLeft` `bottomRight` `top` `topLeft` `topRight` | string | `bottomLeft` |  |
| trigger | 触发下拉的行为, 移动端不支持 hover | Array&lt;`click`\|`hover`\|`contextMenu`> | \[`hover`] |  |
| open | 菜单是否显示，小于 4.23.0 使用 `visible`（[为什么?](/docs/react/faq#弹层类组件为什么要统一至-open-属性)） | boolean | - | 4.23.0 |
| onOpenChange | 菜单显示状态改变时调用，点击菜单按钮导致的消失不会触发。小于 4.23.0 使用 `onVisibleChange`（[为什么?](/docs/react/faq#弹层类组件为什么要统一至-open-属性)） | (open: boolean) => void | - | 4.23.0 | -->

| parameter        | explain                                                                              | type                    | Default    |
| ---------------- | ------------------------------------------------------------------------------------ | ----------------------- | ---------- |
| open             | Whether the menu is displayed                                                        | boolean                 | `hover`    |
| trigger          | MTrigger pull-down behavior                                                          | `click`,`hover`         | -          |
| menu             | Menu configuration item                                                              | [MenuProps](#menuprops) | -          |
| placement        | Menu pop-up location：`bottom` `bottomLeft` `bottomRight` `top` `topLeft` `topRight` | string                  | bottomLeft |
| overlayClassName | Class name of the drop-down root element                                             | string                  | -          |
| overlayStyle     | Drop down the style of the root element                                              | CSSProperties           | -          |
| disabled         | Whether the menu is disabled                                                         | boolean                 | false      |
| onOpenChange     | Called when the menu display status changes                                          | (open: boolean) => void | -          |
| onOpenClick      | Called when a menu sub-item is clicked                                               | (key: string) => void   | -          |

### MenuProps

下拉菜单属性

| parameter | explain                 | type      | Default |
| --------- | ----------------------- | --------- | ------- |
| key       | Unique flag of item     | string    | -       |
| label     | Menu item title         | ReactNode | -       |
| disabled  | Disabled or not         | boolean   | false   |
| danger    | Show error status style | boolean   | false   |
