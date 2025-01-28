export function debounce(func: Function, timeout: number = 300): (...args: any[]) => void {
    let timer: ReturnType<typeof setTimeout> | undefined

    return (...args) => {
        clearTimeout(timer)

        timer = setTimeout(() => func.apply(this, args), timeout)
    }
}
