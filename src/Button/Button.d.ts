/**
 * @module ButtonProps
 */

interface FOButtonProps {
    variant: 'text' | 'contained' | 'outlined'
    radio: boolean
    disabled: boolean
}

interface ButtonProps {
    /**
     * @description 属性描述
     * @default "内容"
     */
    children: string
    /**
     * @description 属性描述
     * @default "样式"
     */
    variant?: 'text' | 'contained' | 'outlined'
    /**
     * @description 属性描述
     * @default "圆角"
     */
    radio?: boolean
    /**
     * @description 属性描述
     * @default "禁用"
     */
    disabled?: boolean
    /**
     * @description 属性描述
     * @default "style样式"
     */
    style?: React.CSSProperties
}

interface RippleArrayType {
    key: number
    Xy: {
        top: number
        left: number
    }
}

type RippleProps = Pick<RippleArrayType, 'Xy'>

export { FOButtonProps, ButtonProps, RippleArrayType, RippleProps }
