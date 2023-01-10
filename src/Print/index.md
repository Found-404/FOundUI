# Print

_定制化 Console.log_
~~开发辅助组件,没什么大用处好吧 😋~~

```jsx
import { Button, Print } from 'FOundUI'

export default () => {
    return (
        <>
            <Button variant="contained" onClick={() => Print('测试Text', '1.0.0')}>
                测试Text
            </Button>
            <Button
                variant="contained"
                onClick={() => Print('测试Text')}
                style={{ margin: '0px 10px' }}
            >
                测试Text
            </Button>
        </>
    )
}
```

## API

-   Print(string, [string])
