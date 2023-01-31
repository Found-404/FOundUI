# Grid

:::warning{title=开发中}
BUTTON 组件处于开发阶段
:::

## 基础栅格

从堆叠到水平排列。
使用单一的一组 Row 和 Col 栅格组件，就可以创建一个基本的栅格系统，所有列（Col）必须放在 Row 内。

```jsx
import { Row, Col } from 'FOundUI'
export default () => {
    const style = {
        backgroundColor: '#1976d2',
        color: '#fff',
        padding: '10px 0'
    }
    return (
        <>
            <Row gutter={[10, 20]}>
                <Col span={24} style={style}>
                    col24
                </Col>
                <Col span={12} style={style}>
                    col12
                </Col>
                <Col span={12} style={style}>
                    col12
                </Col>
                <Col span={8} style={style}>
                    col8
                </Col>
                <Col span={8} style={style}>
                    col8
                </Col>
                <Col span={8} style={style}>
                    col8
                </Col>
                <Col span={6} style={style}>
                    col6
                </Col>
                <Col span={6} style={style}>
                    col6
                </Col>
                <Col span={6} style={style}>
                    col6
                </Col>
                <Col span={6} style={style}>
                    col6
                </Col>
            </Row>
        </>
    )
}
```

## 左右偏移

列偏移。
使用 offset 可以将列向右侧偏。例如，offset={4} 将元素向右侧偏移了 4 个列（column）的宽度。

```jsx
import { Row, Col } from 'FOundUI'
export default () => {
    const style = {
        backgroundColor: '#1976d2',
        color: '#fff',
        padding: '10px 0'
    }
    return (
        <>
            <Row gutter={[10, 20]}>
                <Col span={8} span={8} style={style}>
                    col1
                </Col>
                <Col offset={8} span={8} style={style}>
                    col1
                </Col>
                <Col span={6} offset={6} style={style}>
                    col-6 col-offset-6
                </Col>
                <Col span={6} offset={6} style={style}>
                    col-6 col-offset-6
                </Col>
                <Col span={12} offset={6} style={style}>
                    col-12 col-offset-6
                </Col>
            </Row>
        </>
    )
}
```

## API

#### Row

| 参数   | 说明                                           | 类型    | 默认值 |
| ------ | ---------------------------------------------- | ------- | ------ |
| gutter | 栅格间隔,使用数组形式设置 [水平间距, 垂直间距] | Arrary  | [0,0]  |
| wrap   | 是否自动换行                                   | boolean | true   |

#### Col

| 参数   | 说明                                      | 类型   | 默认值 |
| ------ | ----------------------------------------- | ------ | ------ |
| span   | 栅格占位格数，为 0 时相当于 display: none | number | 6      |
| offset | 栅格左侧的间隔格数，间隔内不可以有栅格    | number | \_     |
