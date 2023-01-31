/**
 * @module GridProps
 */

interface FORowProps {
    gutter?: Array
    children?: any
    wrap?: any
    style?: any
}
interface FOColProps {
    span?: number
    offset?: number
    children?: any
    style?: any
    gutter?: Array
}

export { FORowProps, FOColProps }
