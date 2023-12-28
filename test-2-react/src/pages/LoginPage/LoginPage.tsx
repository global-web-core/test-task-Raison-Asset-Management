import { useEffect, useState } from "react";
import { Route, Switch, useHistory } from "react-router";
import { ButtonWithTimer, FormCheckbox, FormInput } from "../../components";
import { URLS } from "../../globals/constants/common";
import { Http } from "../../api";

export const LoginPage = (): JSX.Element => {
    const history = useHistory();
    
    const [isValidForm, setIsValidForm] = useState(true);
    const [email, setEmail] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleEmailChange = (email: string) => {
      setEmail(email);
    }

    const handleCheck = (checked: boolean) => {
      setIsChecked(checked);
    }

    useEffect(() => {
      if (email.length > 4 && isChecked) {
        setIsValidForm(false)
      } else {
        setIsValidForm(true)
      }
    }, [email, isChecked])

    const onClickByHold = () => {
      history.push(URLS.LOGIN_STEP_2);
    }

    const onClickSetEmail = () => {
      Http.create({email});
    }

  return (
    <Switch>
      <Route path={URLS.LOGIN_STEP_1}>
        <FormInput onEmailChange={handleEmailChange} defaultValue={email} />
        <div className="p-1"></div>
        <FormCheckbox onCheck={handleCheck} defaultValue={isChecked} />
        <ButtonWithTimer
          disabled={isValidForm}
          onСlickHappened={onClickByHold}
        />
      </Route>
      <Route path={URLS.LOGIN_STEP_2}>
        <input type="text" placeholder={email} className="input" readOnly />
        <div className="flex justify-between mt-auto">
          <button className="flex-1 btn btn-primary mt-auto bg-gray-800 text-gray-300 mr-2" onClick={() => history.push(URLS.LOGIN_STEP_1)}>Back</button>
          <button className="flex-1 btn btn-primary mt-auto" onClick={onClickSetEmail}>Confirm</button>
        </div>
      </Route>
    </Switch>
  )
}