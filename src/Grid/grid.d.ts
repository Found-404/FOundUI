/**
 * @module GridProps
 */

interface FORowProps {
    gutter?: number[]
    children?: any
    wrap?: boolean | number
    style?: any
}
interface FOColProps {
    span?: number
    offset?: number
    children?: any
    style?: any
    gutter?: number[]
}

export { FORowProps, FOColProps }
