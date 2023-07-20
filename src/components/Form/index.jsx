import { useState } from 'react'
import './form.css'
import containsLetters from '../../utils/containsLetters'
import containsDigits from '../../utils/containsDigits'
import containsSymbols from '../../utils/containsSymbols'
import containsSpace from '../../utils/containsSpace'

const Form = () => {

    const [password, setPassword] = useState('')

    const handleChangePassword = (password) => {
        if (containsSpace(password)) return
        setPassword(password)
    }

    const checkPasswordStrength = (password) => {

        if (password.length === 0) return 'empty'
        if (password.length < 8) return 'short'

        const areLetters = containsLetters(password)
        const areDigits = containsDigits(password)
        const areSymbols = containsSymbols(password)

        const strength = areLetters && areDigits && areSymbols ? 'strong'
            : (areLetters && areSymbols) || (areLetters && areDigits) || (areDigits && areSymbols) ? 'medium'
                : 'easy'

        console.log('digits', areDigits, 'letters', areLetters, 'symbols', areSymbols)

        return strength
    }

    const passwordStrength = checkPasswordStrength(password)

    console.log(password)

    return (
        <form onSubmit={(e) => e.preventDefault()} className='form'>
            <label htmlFor="password" className='label'>
                <span className='title'>Password</span>
                <input
                    type="password"
                    id="password"
                    value={password}
                    onChange={(e) => handleChangePassword(e.target.value)}
                    className='input'
                />
            </label>
            <div className='indicators'>
                <span className={`indicator first ${passwordStrength}`}></span>
                <span className={`indicator second ${passwordStrength}`}></span>
                <span className={`indicator third ${passwordStrength}`}></span>
            </div>
            <div className='strength'>Your password is {passwordStrength}</div>
        </form>
    )
}

export default Form