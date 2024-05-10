import { MouseEvent, PropsWithChildren } from "react";

import Styles from "./styles";



export interface Props extends PropsWithChildren {
  htmlFor?: string;
  tooltip?: boolean;
}

function LabelTooltip({
  children,
  htmlFor,
  tooltip = false
}: Props) {
  const labelTooltip = (e: MouseEvent) => {
    e.preventDefault();
  }



  return (
    <Styles className="label-tooltip" htmlFor={htmlFor}>
      <div className="title">
        {children}
      </div>
      {tooltip ? (
        <button onClick={labelTooltip}>?</button>
      ) : null}
    </Styles>
  );
}

export default LabelTooltip;