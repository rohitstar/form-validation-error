import useInput from './hook/use-input'

const SimpleInput = () => {
  const {
    value: enteredText,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameInputChangeHandler,
    inputBlurHandler: nameInputBlurHandler,
    reset: resetInputName,
  } = useInput((value) => value.trim() !== '')

  const {
    value: enteredEmailText,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetInputEmail,
  } = useInput((value) => value.includes('@'))

  let formIsValid = false
  if (enteredNameIsValid && enteredEmailIsValid) {
    formIsValid = true
  }

  const formSubmissionHandler = () => {
    // setEnteredNameTouched(true);
    // setEnteredEmailTouched(true);
    if (!enteredNameIsValid && !enteredEmailIsValid) {
      return
    }

    console.log(enteredText)
    console.log(enteredEmailText)

    resetInputName()
    resetInputEmail()
  }

  const inputNameBoxEffect = nameInputHasError
    ? 'form-control invalid'
    : 'form-control'

  const inputEmailBoxEffect = emailInputHasError
    ? 'form-control invalid'
    : 'form-control'

  return (
    <div>
      <div className={inputNameBoxEffect}>
        <label htmlFor="name">Your Name</label>
        <input
          type="text"
          id="name"
          value={enteredText}
          onBlur={nameInputBlurHandler}
          onChange={nameInputChangeHandler}
        />
        {nameInputHasError && (
          <p className="error-text">Plz enter name must not empty!!</p>
        )}
      </div>
      <div className={inputEmailBoxEffect}>
        <label htmlFor="email">Your Email</label>
        <input
          type="text"
          id="email"
          value={enteredEmailText}
          onBlur={emailInputBlurHandler}
          onChange={emailInputChangeHandler}
        />
        {emailInputHasError && (
          <p className="error-text">Plz enter email must not empty!!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} onClick={formSubmissionHandler}>
          Submit
        </button>
      </div>
    </div>
  )
}

export default SimpleInput
