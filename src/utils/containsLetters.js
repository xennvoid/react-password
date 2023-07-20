const containsLetters = (string) => {
    const areLetters = /^.*[a-zA-Z].*$/
    return areLetters.test(string)
}

export default containsLetters