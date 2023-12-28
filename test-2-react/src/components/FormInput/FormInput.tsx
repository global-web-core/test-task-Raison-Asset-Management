import { useEffect, useState } from "react";
import { FormInputProps } from "./FormInput.types";

export const FormInput = ({onEmailChange, defaultValue}: FormInputProps): JSX.Element => {
  const [email, setEmail] = useState(defaultValue || '');
  const [isValid, setIsValid] = useState(true);
  const [emailCorrect, setEmailCorrect] = useState('');

  const handleEmail = (e: React.ChangeEvent<HTMLInputElement>) => {
    const emailValue = e.target.value;
    setEmail(emailValue);
    validateEmail(emailValue);
  }

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    setIsValid(emailRegex.test(email));
  }

  useEffect(() => {
    if (isValid && email.length > 4) setEmailCorrect(email)
    if (!isValid && emailCorrect.length > 1) {
      setEmailCorrect('')
    }
  }, [email, isValid])

  useEffect(() => {
    onEmailChange(emailCorrect, isValid)
  }, [emailCorrect])

  return (
    <>
      <label className="form-control">
        <div className="label">
          <span className="label-text">Email</span>
        </div>
        <input type="text" placeholder="Type here" className={`input ${!isValid ? 'border-red-500' : ''}`} onChange={handleEmail} value={email} />
        {!isValid &&
          <div className="label">
            <span className="label-text-alt">Некорректный email</span>
          </div>
        }
      </label>
    </>
  )
}