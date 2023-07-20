const containsSymbols = (string) => {
    const areSymbols = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    return areSymbols.test(string)
}

export default containsSymbols