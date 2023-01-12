/**
 * @module QRCodeProps
 */
interface FOSpanProps {
    status: 'loading' | 'expired'
}
interface FOQRCodeProps {
    ramp: string[]
}
// 组件PropsType
interface QRCodeprops {
    /**
     * @description 属性描述
     * @default "内容"
     */
    children: any
    /**
     * @description 属性描述
     * @default "code内容"
     */
    value: string = 'text'
    /**
     * @description 属性描述
     * @default "code图标"
     */
    icon: string
    /**
     * @description 属性描述
     * @default "code颜色"
     */
    fgColor: string = '#000000'
    /**
     * @description 属性描述
     * @default "code背景颜色"
     */
    bgColor: string = '#000000'
    /**
     * @description 属性描述
     * @default "code样式"
     */
    style: any
    /**
     * @description 属性描述
     * @default "code状态"
     */
    status: 'loading' | 'expired'
    /**
     * @description 属性描述
     * @default "code宽高"
     */
    size: number = 128
    /**
     * @description 属性描述
     * @default "code颜色渐变"
     */
    ramp: string[]
}
export { FOSpanProps, FOQRCodeProps, QRCodeprops }
