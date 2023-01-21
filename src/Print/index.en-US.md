# Print

customization Console.log

```jsx
import { Button, Print } from 'FOundUI'

export default () => {
    return (
        <>
            <Button variant="contained" onClick={() => Print('Text', '1.0.0')}>
                Text
            </Button>
            <Button
                variant="contained"
                onClick={() => Print('Text')}
                style={{ margin: '0px 10px' }}
            >
                Text
            </Button>
        </>
    )
}
```
