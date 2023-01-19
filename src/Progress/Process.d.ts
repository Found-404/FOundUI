/**
 * @module Progressprops
 */
interface FOProgresstextProps {
    showInfo: boolean
}
interface FOProgressbgProps {
    status: 'success' | 'warning' | 'exception'
}
// 组件PropsType
interface Progressprops {
    children: any
    progress: number | string // 当前进度
    width: number | string // 进度条总宽度
    strokeWidth: number | string // 进度条线的宽度
    showInfo: boolean //是否显示进度数值或状态图标
    status: 'success' | 'warning' | 'exception' // 进度条状态
}

export { FOProgressbgProps, Progressprops }
