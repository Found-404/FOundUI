# Grid

24 grid system.

## Foundation grid

From stacked to horizontal.
Using a single set of Row and Col grid components, you can create a basic grid system where all columns (Col) must be placed within the Row.

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

## Left-right migration

line skew.
Use offset to tilt the column to the right. For example, offset={4} offsets the element to the right by four column widths.

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

| parameter | explain                                                                     | type    | default |
| --------- | --------------------------------------------------------------------------- | ------- | ------- |
| gutter    | Raster spacing, set using array form [horizontal spacing, vertical spacing] | Arrary  | [0,0]   |
| wrap      | Whether to wrap lines automatically                                         | boolean | true    |

#### Col

| parameter | explain                                                                             | type   | default |
| --------- | ----------------------------------------------------------------------------------- | ------ | ------- |
| span      | Number of grid placeholders, equivalent to display: none if 0                       | number | 6       |
| offset    | The number of spacers to the left of the grid. There can be no grids in the spacers | number | \_      |
