import { useRef, useState } from "react";

import { FormValues, FormField } from "../../../components/Form/types";
import { Form } from "../../../components";
import Styles from "./styles";



function Hero() {
  const formRef = useRef<HTMLFormElement>(null);
  const [formValues, setFormValues] = useState<FormValues>({});

  const bookSpot = () => {

  }

  const fields: FormField[] = [
    {
      type: "datetime-local",
      name: "check-in",
      label: "Check-In",
      placeholder: "dd/mm, hh:mm",
      groupClass: "field-row"
    },
    {
      type: "datetime-local",
      name: "check-out",
      label: "Check-Out",
      required: false,
      placeholder: "dd/mm, hh:mm",
      groupClass: "field-row"
    },
    {
      type: "text",
      name: "guests",
      label: "Guests",
      placeholder: "No. of Guests",
      groupClass: "field-row"
    }
  ]



  return (
    <Styles id="Hero">
      <div className="page-wrapper">
        <div className="text-content flex column center">
          <h1>
            CULLINARY EXCELLENCE AT GHANA'S{" "
            }PREMIER DINING DESTINATION
          </h1>
        </div>
        <div className="instant-booking">
          <Form
            ref={formRef}
            fields={fields}
            values={formValues}
            setValues={setFormValues}
            onSubmit={bookSpot}
          >
            <button
              className="button fit-content"
              type="submit"
            >
              Book Now
            </button>
          </Form>
        </div>
      </div>
    </Styles>
  );
}

export default Hero;