import { ReactNode } from "react";

import Styles from "./styles";
import { Spinner } from "..";



type Props = {
  message?: ReactNode
  className?: string;
}

function Loader({ message, className }: Props) {
  return (
    <Styles className={`loader ${className}`}>
      <Spinner />
      {message ? (
        <div className="load-message">
          {message}
        </div>
      ) : null}
    </Styles>
  );
}

export default Loader;