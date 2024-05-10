import { ChangeEvent, useEffect, useState } from "react";

import Styles from "./styles";



export interface Props extends React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement
> {
  value: string | number;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

function TextField(props: Props) {
  const {
    className,
    disabled,
    ...inputProps
  } = props;
  const [classNm, setClassNm] = useState<string>("");

  useEffect(() => {
    setClassNm(
      `${className
        ? className : ""} ${disabled
          ? "disabled" : ""
      }`
    );
  }, [className, disabled])



  return (
    <Styles className={`text-field ${classNm}`}>
      <input
        {...inputProps}
        id={inputProps.name}
        disabled={disabled}
      />
    </Styles>
  );
}

export default TextField;

TextField.defaultProps = {
  required: true
}