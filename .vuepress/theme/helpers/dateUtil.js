
export function formatDate (time, fmt = 'yyyy-MM-dd hh:mm:ss') {
    time = time.replace(/-/g, '/')
    const date = new Date(time)
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, date.getFullYear() + '').substr(4 - RegExp.$1.length)
    }

    const o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    }

    for (const key in o) {
        if (RegExp(`(${key})`).test(fmt)) {
            const str = o[key] + ''
            fmt = fmt.replace(RegExp.$1, str.length === 2 ? str : '0' + str)
        }
    }
    return fmt
}
