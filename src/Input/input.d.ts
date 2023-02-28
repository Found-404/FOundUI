/**
 * @module GridProps
 */

interface FOInputProps {
    disabled?: boolean
    prefix?: ReactNode
    suffix?: ReactNode
    defaultValue?: string
    onChange?: (e: any) => void
    placeholder?: string
    maxLength?: number
    showCount?: number
}

export { FOInputProps }
