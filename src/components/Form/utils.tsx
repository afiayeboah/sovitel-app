import { FormEvent, MouseEvent } from "react";

import { FieldWrapperProps, ValidateFormArgs } from "./types";
import { isEmail } from "../../utils/strings";
import LabelTooltip from "../LabelToolTip";



/*************************************************/
/** Wrapper with semantic label for a form field */
export function FieldWrapper({ field, children }: FieldWrapperProps) {
  const { name, label, className } = field;
  return (
    <div className={`field-column ${className ? className : ""}`}>
      <LabelTooltip htmlFor={name}>
        {label}
      </LabelTooltip>
      {children}
    </div>
  );
}

const validationClass = "validation-msg";
const getOrCreateValidationMsg = (
  parent: HTMLElement,
  message: string
) => {
  let validationMsg = parent.nextElementSibling as HTMLElement | null;
  if (
    !validationMsg ||
    !validationMsg.classList.contains(validationClass)
  ) {
    parent.classList.add("error");
    validationMsg = document.createElement("div");
    validationMsg.className = validationClass;
    parent.insertAdjacentElement("afterend", validationMsg);
  }
  validationMsg.innerText = message;

  return validationMsg;
}

/******************************************/
/** Ensures required fields are not empty */
export const validateFormData = ({
  event,
  formRef,
}: ValidateFormArgs) => {
  return new Promise<MouseEvent | FormEvent>((resolve, reject) => {
    event.preventDefault();
    if (!formRef || !formRef.current) {
      reject(false);
      return;
    }
    const inputs = formRef.current.querySelectorAll("input");
    const selects = formRef.current.querySelectorAll("select");
    const fields = [
      ...Array.from(inputs),
      ...Array.from(selects)
    ];
    let isValid = true;
    fields.forEach((field) => {
      if (!field.required) return;
      // Get the field's wrapper (E.g ".text-field", ".select-field")
      const parent = field.parentElement;
      if (!parent) return;
      // Start by removing any error styling on the parent
      parent.classList.remove("error");
      let validationMsg = parent.nextElementSibling;
      if (
        validationMsg &&
        validationMsg.classList.contains(validationClass)
      ) {
        // Start by removing any existing error messages
        validationMsg.remove();
      }

      /****************************************************/
      /** Begin the Error checks and spawn error messages */
      /****************************************************/

      // Empty required field
      if (field.required && !field.value.trim()) {
        validationMsg = getOrCreateValidationMsg(
          parent,
          "Please enter this"
        );
        isValid = false;
      }

      // Email Validation
      else if (field.type === "email" && !(isEmail(field.value))) {
        validationMsg = getOrCreateValidationMsg(
          parent,
          "Please enter a valid Email"
        );
        isValid = false;
      }

      // Mismatching passwords on setting a password
      else if (
        (field.type === "password" && field.name === "confirm-password")
      ) {
        const passField = fields.find(f => f.name === "password");
        const confirmField = field;
        if (passField && passField.value !== confirmField.value) {
          validationMsg = getOrCreateValidationMsg(
            parent,
            "Your passwords do not match. Please check them."
          );
          isValid = false;
        }
      }
    });

    if (isValid) {
      resolve(event);
    } else {
      reject(event)
    }
  });
}