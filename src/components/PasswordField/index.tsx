import { useEffect, useState } from "react";

import hidden from "../../assets/vector-images/generic/eye-off.svg";
import { Props as TextFieldProps } from "../TextField";
import view from "../../assets/vector-images/generic/eye.svg";
import Styles from "./styles";



type Props = TextFieldProps & {
  value: string;
}

function PasswordField(props: Props) {
  const {
    value,
    className,
    autoComplete,
    ...inputProps
  } = props
  const [passwordStrength, setPasswordStrength] = useState<string>("Poor");
  const [fieldType, setFieldType] = useState<string>("password");
  // Switch to "new-password" when ready to implement
  const newPassword = autoComplete && autoComplete === "new-password-test";

  const changeFieldType = () => {
    if (fieldType === "password")
      setFieldType("text")
    else setFieldType("password")
  }

  useEffect(() => {
    const strongRegex = new RegExp(
      "^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})"
    );
    const mediumRegex = new RegExp(
      "^(((?=.*[a-z])(?=.*[A-Z]))|((?=.*[a-z])(?=.*[0-9]))|((?=.*[A-Z])(?=.*[0-9])))(?=.{8,})"
    );
    if (strongRegex.test(value)) {
      setPasswordStrength("Strong");
    } else if (mediumRegex.test(value)) {
      setPasswordStrength("Medium");
    } else {
      setPasswordStrength("Poor");
    }
  }, [value])



  return (
    <Styles className="password-field">
      <input
        {...inputProps}
        type={fieldType}
        value={value}
        id={inputProps.name}
        autoComplete={autoComplete}
      />
      <img
        onClick={changeFieldType}
        className="toggle-view"
        alt=""
        src={fieldType === "text" ? view : hidden}
      />
      {(newPassword && value.length > 0) ? (
        <div className={`strength ${passwordStrength}`}>
          Password Strength: {passwordStrength}
        </div>
      ) : null}
    </Styles>
  )
}

export default PasswordField;

PasswordField.defaultProps = {
  required: true,
  autoComplete: "password",
}