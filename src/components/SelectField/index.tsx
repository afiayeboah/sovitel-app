import React from "react";

import Styles from "./styles";



export type SelectFieldOption = {
  value: string;
  label: any;
}

export interface Props extends React.DetailedHTMLProps<
  React.SelectHTMLAttributes<HTMLSelectElement>, HTMLSelectElement
> {
  options?: any[];
  icon?: string;
  valueKey?: string;
  labelKey?: string;
  placeholder?: string;
}

function SelectField(props: Props) {
  const {
    icon,
    valueKey = "value",
    labelKey = "label",
    options = [],
    placeholder,
    ...selectProps
  } = props;



  return (
    <Styles className="select-field">
      {icon
        ? (
          <img
            src={icon}
            className="icon"
            alt=""
          />
        ) : null
      }
      <select
        id={selectProps.name}
        {...selectProps}
      >
        <option value="" disabled>
          {placeholder ? placeholder : "Please select an option"}
        </option>
        {options.map((option: any, index: number) => (
          <option key={index} value={`${option[valueKey]}`}>
            {`${option[labelKey]}`}
          </option>
        ))}
      </select>
    </Styles>
  );
}

export default SelectField;