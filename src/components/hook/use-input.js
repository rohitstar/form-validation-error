import { useState } from 'react'

const useInput = (validateValue) => {
  const [enteredText, setEnteredText] = useState('')
  const [isTouched, setIsTouched] = useState(false)

  const enteredIsValid = validateValue(enteredText)
  const hasError = !enteredIsValid && isTouched

  const valueChangeHandler = (event) => {
    setEnteredText(event.target.value)
  }

  const inputBlurHandler = () => {
    setIsTouched(true)
  }

  const reset = () => {
    setEnteredText('')
    setIsTouched(false)
  }

  return {
    value: enteredText,
    isValid: enteredIsValid,
    hasError,
    valueChangeHandler,
    inputBlurHandler,
    reset,
  }
}

export default useInput
