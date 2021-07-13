import useInput from './hook/use-input'

const isInputEmpty = (value) => value.trim() !== ''
const isInputEmailEmpty = (value) => value.includes('@')

const BasicForm = () => {
  const {
    value: enteredFirstNameText,
    isValid: enteredFirstNameIsValid,
    hasError: firstNameInputHasError,
    valueChangeHandler: firstNameInputChangeHandler,
    inputBlurHandler: firstNameInputBlurHandler,
    reset: resetInputFirstName,
  } = useInput(isInputEmpty)

  const {
    value: enteredLastNameText,
    isValid: enteredLastNameIsValid,
    hasError: lastNameInputHasError,
    valueChangeHandler: lastNameInputChangeHandler,
    inputBlurHandler: lastNameInputBlurHandler,
    reset: resetInputLastName,
  } = useInput(isInputEmpty)

  const {
    value: enteredEmailText,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailInputChangeHandler,
    inputBlurHandler: emailInputBlurHandler,
    reset: resetInputEmail,
  } = useInput(isInputEmailEmpty)

  let formIsValid = false
  if (
    enteredFirstNameIsValid &&
    enteredLastNameIsValid &&
    enteredEmailIsValid
  ) {
    formIsValid = true
  }

  const formSubmissionHandler = () => {
    // setEnteredNameTouched(true);
    // setEnteredEmailTouched(true);
    if (
      !enteredFirstNameIsValid &&
      !enteredLastNameIsValid &&
      !enteredEmailIsValid
    ) {
      return
    }

    console.log(enteredFirstNameText)
    console.log(enteredLastNameText)
    console.log(enteredEmailText)

    resetInputFirstName()
    resetInputLastName()
    resetInputEmail()
  }

  const inputFirstNameBoxEffect = firstNameInputHasError
    ? 'form-control invalid'
    : 'form-control'

  const inputLastNameBoxEffect = lastNameInputHasError
    ? 'form-control invalid'
    : 'form-control'

  const inputEmailBoxEffect = emailInputHasError
    ? 'form-control invalid'
    : 'form-control'

  return (
    <form>
      <div className="control-group">
        <div className={inputFirstNameBoxEffect}>
          <label htmlFor="first-name">First Name</label>
          <input
            type="text"
            id="first-name"
            value={enteredFirstNameText}
            onBlur={firstNameInputBlurHandler}
            onChange={firstNameInputChangeHandler}
          />
          {firstNameInputHasError && (
            <p className="error-text">Please Enter The First Name!</p>
          )}
        </div>
        <div className={inputLastNameBoxEffect}>
          <label htmlFor="last-name">Last Name</label>
          <input
            type="text"
            id="last-name"
            value={enteredLastNameText}
            onBlur={lastNameInputBlurHandler}
            onChange={lastNameInputChangeHandler}
          />
          {lastNameInputHasError && (
            <p className="error-text">Please Enter The Last Name!</p>
          )}
        </div>
      </div>
      <div className={inputEmailBoxEffect}>
        <label htmlFor="name">E-Mail Address</label>
        <input
          type="email"
          id="email"
          value={enteredEmailText}
          onBlur={emailInputBlurHandler}
          onChange={emailInputChangeHandler}
        />
        {emailInputHasError && (
          <p className="error-text">Please Enter The Email!</p>
        )}
      </div>
      <div className="form-actions">
        <button disabled={!formIsValid} onClick={formSubmissionHandler}>
          Submit
        </button>
      </div>
    </form>
  )
}

export default BasicForm
