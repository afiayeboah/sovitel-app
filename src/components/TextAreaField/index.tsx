import { ChangeEvent } from "react";

import Styles from "./styles";



export interface Props extends React.DetailedHTMLProps<
  React.TextareaHTMLAttributes<HTMLTextAreaElement>, HTMLTextAreaElement
> {
  value: string | number;
  onChange: (event: ChangeEvent<HTMLTextAreaElement>)
    => void;
}

function TextAreaField(props: Props) {
  const { value, maxLength, ...textAreaProps } = props;
  return (
    <Styles className="text-area-field">
      <textarea
        id={textAreaProps.name}
        value={value}
        maxLength={maxLength}
        {...textAreaProps}
      />
      {maxLength ? (
        <div className="max-length">
          {value.toString().length} / {maxLength} characters
        </div>
      ) : null}
    </Styles>
  );
}

export default TextAreaField;