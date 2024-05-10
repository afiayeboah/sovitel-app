import {
  MouseEvent, FormEvent, HTMLInputTypeAttribute,
  PropsWithChildren, ReactNode
} from "react";

import { Props as SelectFieldProps } from "../SelectField";
import { Props as TextFieldProps } from "../TextField";



export type FormValues = {
  [key: string]: any;
}

type FieldType =
  | HTMLInputTypeAttribute
  | "textarea"
  | "select"
  | "react-node";

type RawFormField = TextFieldProps & SelectFieldProps;

export interface FormField extends Omit<RawFormField, "value" | "onChange"> {
  name: string;
  label: string;
  type: FieldType;
  reactNode?: ReactNode;
  className?: string;
  // Group class would wrap fields with the same identifier under
  // a parent wrapper.
  // Define groupClass like this: ""class-name-1""
  // E.g "field-row-1" or "row md-4 1"
  groupClass: string;
}

export interface FieldWrapperProps extends PropsWithChildren {
  field: FormField;
}

export type ValidateFormArgs = {
  event: MouseEvent | FormEvent;
  formRef: React.RefObject<HTMLFormElement> | null;
}