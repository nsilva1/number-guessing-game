export const generateRandomNumber = (): number => {
    return Math.floor(Math.random() * 100) + 1
}

export const isInputANumber = (input: string | number | null | undefined): boolean => {
    const num = Number(input)
    return Number.isFinite(num)
}