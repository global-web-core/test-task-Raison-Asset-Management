import { useEffect, useState } from "react";
import { FormCheckboxProps } from "./FormCheckbox.types";

export const FormCheckbox = ({onCheck, defaultValue}: FormCheckboxProps): JSX.Element => {
  const [isChecked, setIsChecked] = useState(defaultValue || false);

  const handleCheck = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(prev => !prev)
  }

  useEffect(() => {
    onCheck(isChecked);
  }, [isChecked])

  return (
    <div className="form-control">
      <label className="label cursor-pointer justify-start gap-2">
      <input type="checkbox" className="checkbox checkbox-primary" checked={isChecked} onChange={handleCheck} />
      <span className="label-text">I agree</span>
      </label>
    </div>
  )
}