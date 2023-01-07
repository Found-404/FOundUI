const Log = (message: any, numberOf?: string) => {
    if (typeof message === 'string') {
        console.log(
            `%c🦄 ${message}%c${numberOf}`,
            "background-color: #697eff;color:#fff;padding:3px 8px;border-radius: 3px 0px 0px 3px;font-size:13px;font-weight: 700;font-family: '微软雅黑'",
            "background-color: #afafaf;color:#fff;padding:3px 8px;border-left:2.5px solid #afafaf;border-radius: 0px 3px 3px 0px;font-size:13px;font-weight: 700;font-family: '微软雅黑'"
        )
    } else {
        console.log(message)
    }
}

export { Log }
