const containsDigits = (string) => {
    const areDigits = /.*[0-9].*/
    return areDigits.test(string)
}

export default containsDigits