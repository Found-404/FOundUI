# Dropdown

:::warning{title=开发中}
Dropdown 组件处于开发阶段
:::

## 基本用法

最简单的下拉菜单。

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
                <Button variant="contained">下拉菜单</Button>
            </Dropdown>
        </>
    )
}
```

## 弹出位置

支持 6 个弹出位置。

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

## API

属性如下

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

| 参数 | 说明         | 类型                    | 默认值 |
| ---- | ------------ | ----------------------- | ------ |
| open | 菜单是否显示 | boolean                 | -      |
| menu | 菜单配置项   | [MenuProps](#menuprops) | -      |

### MenuProps

下拉菜单属性

| 参数     | 说明             | 类型      | 默认值 |
| -------- | ---------------- | --------- | ------ |
| key      | item 的唯一标志  | string    | -      |
| label    | 菜单项标题       | ReactNode | -      |
| disabled | 是否禁用         | boolean   | false  |
| danger   | 展示错误状态样式 | boolean   | false  |
