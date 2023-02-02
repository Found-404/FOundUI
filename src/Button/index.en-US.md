# Button

:::warning{title=Under development}
BUTTON The component is in the development stage
:::

## Default button

Button with ripple effect

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

## Capsule button

Normal button after changing fillet size

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

## Disable button

The disabled button is inoperable

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

## Buttons of different sizes

Three standard size buttons

## Icon button

The icon button is the same as the default button. There are three default styles, which are only divided into circular and centered icons

## API
