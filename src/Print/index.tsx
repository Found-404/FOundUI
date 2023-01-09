import { primaryColorSystem } from '../style'

const Print = (message: any, numberOf?: string) => {
    if (typeof message === 'string' && typeof numberOf === 'string') {
        console.log(
            `%c🦄 ${message}%c${numberOf}`,
            `background-color: ${primaryColorSystem.FOBLUE};color:#fff;padding:3px 8px;border-radius: 3px 0px 0px 3px;font-size:13px;font-weight: 700;font-family: '微软雅黑'`,
            `background-color: ${'#afafaf'};color:#fff;padding:3px 5px;border-left:2.5px solid #afafaf;border-radius: 0px 3px 3px 0px;font-size:13px;font-weight: 700;font-family: '微软雅黑'`
        )
    } else if (typeof message === 'string' && typeof numberOf !== 'string') {
        console.log(
            `%c🦄 ${message}`,
            `background-color: ${primaryColorSystem.FOBLUE};color:#fff;padding:3px 8px;border-radius: 3px;font-size:13px;font-weight: 700;font-family: '微软雅黑'`
        )
    } else {
        console.log(message)
    }
}

export default Print
