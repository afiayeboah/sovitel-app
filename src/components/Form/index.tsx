import React, {
  PropsWithChildren, ReactNode, forwardRef, MouseEvent,
  ChangeEvent, FormEvent, Fragment
} from "react";

import { FieldWrapper, validateFormData } from "./utils";
import { FormField, FormValues } from "./types";
import TextAreaField from "../TextAreaField";
import PasswordField from "../PasswordField";
import SelectField from "../SelectField";
import TextField from "../TextField";



interface Props extends PropsWithChildren {
  fields: FormField[];
  values: FormValues;
  setValues: React.Dispatch<React.SetStateAction<FormValues>>;
  onSubmit: (e: FormEvent | MouseEvent) => void;
}

const Form = forwardRef<HTMLFormElement, Props>(({
  fields, values, setValues, onSubmit, children
}: Props, ref) => {
  /************************************/
  /** Validate Form before submission */
  const validateForm = (event: MouseEvent | FormEvent) => {
    validateFormData({
      event,
      formRef: ref as React.RefObject<HTMLFormElement> | null
    }).then((e) => {
      onSubmit(e);
    }).catch(() => null);
  }

  /***************************/
  /** Handles string input for:
   *  TextField,
   *  TextAreaField 
   *  SelectField */
  const stringChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
    maxLength?: number
  ) => {
    const { name, value } = e.target;
    if (maxLength && value.toString().length > maxLength) {
      return;
    }
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  /***************************/
  /** Handles select input for:
   *  SelectField */
  const selectChange = (
    event: ChangeEvent<HTMLSelectElement>, options: any[]
  ) => {
    const { name, value }: any = event.target;
    setValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }


  /***********************************/
  /** Iterate and render form fields */
  const renderFormFields = () => {
    const groupClasses: string[] = Array.from(
      new Set(fields.map((field) => field.groupClass || ""))
    );
    const fieldGroups: Record<string, ReactNode[]> = {};
    groupClasses.forEach((groupClass) => {
      fieldGroups[groupClass] = []
    })
    fields.forEach((field, index) => {
      const { groupClass, ...otherAttrs } = field;
      let element: ReactNode = null;
      switch (field.type) {
        case "text":
          element = (
            <FieldWrapper field={field} key={index}>
              <TextField
                {...otherAttrs}
                value={values[field.name]?.toString() || ""}
                onChange={stringChange}
                autoComplete={field.autoComplete || "off"}
                placeholder={field.placeholder || field.label}
                required={field.required ?? true}
              />
            </FieldWrapper>
          );
          break;
        case "email":
          element = (<FieldWrapper field={field} key={index}>
            <TextField
              {...otherAttrs}
              value={values[field.name]?.toString() || ""}
              onChange={stringChange}
              autoComplete={field.autoComplete || "off"}
              placeholder={field.placeholder || field.label}
              required={field.required ?? true}
            />
          </FieldWrapper>
          );
          break;
        case "password":
          element = (
            <FieldWrapper field={field} key={index}>
              <PasswordField
                {...otherAttrs}
                value={values[field.name]?.toString() || ""}
                onChange={stringChange}
                placeholder={field.placeholder || field.label}
                required={field.required ?? true}
              />
            </FieldWrapper>
          );
          break;
        case "textarea":
          element = (
            <FieldWrapper field={field} key={index}>
              <TextAreaField
                maxLength={field.maxLength}
                name={field.name}
                value={values[field.name]?.toString() || ""}
                onChange={(e) => stringChange(e, field.maxLength)}
                placeholder={field.placeholder || field.label}
                required={field.required ?? true}
              />
            </FieldWrapper>
          );
          break;
        case "datetime-local":
          element = (
            <FieldWrapper field={field} key={index}>
              <TextField
                {...otherAttrs}
                value={values[field.name]?.toString() || ""}
                onChange={stringChange}
                autoComplete={field.autoComplete || "off"}
                placeholder={field.placeholder || field.label}
                required={field.required ?? true}
              />
            </FieldWrapper>
          );
          break;
        case "select":
          element = (
            <FieldWrapper field={field} key={index}>
              <SelectField
                {...otherAttrs}
                value={values[field.name]?.toString() || ""}
                onChange={(e) => selectChange(e, field.options || [])}
                autoComplete={field.autoComplete || "off"}
                required={field.required ?? true}
              />
            </FieldWrapper>
          );
          break;
        case "react-node":
          element = field.reactNode;
          break;
        default:
          return null;
      }
      fieldGroups[groupClass].push(element)
    });
    const formFields = Object.entries(fieldGroups).map(([groupClass, elements], index) => (
      <div className={groupClass} key={index}>
        {elements.map((element, index) =>
          <Fragment key={index}>
            {element}
          </Fragment>
        )}
      </div>
    ));
    return formFields;
  }


  return (
    <form
      ref={ref}
      noValidate
      className="form"
      onSubmit={validateForm}
    >
      {renderFormFields()}
      {children}
    </form>
  );
});

export default Form;