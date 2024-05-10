import { ReactNode } from "react";

import Styles from "./styles";



type Props = {
  icon?: string;
  title: string;
  description?: ReactNode;
  children: ReactNode;
}

function InfoPanel({
  title,
  description,
  children,
  icon,
}: Props) {
  return (
    <Styles className="info-panel">
      <figure className="info-heading">
        {icon ? (
          <img src={icon} alt="" />
        ) : null}
        <figcaption>
          <h3 className="title">{title}</h3>
          <div className="description">
            {description}
          </div>
        </figcaption>
      </figure>
      <div className="info-content">
        {children}
      </div>
    </Styles>
  );
}

export default InfoPanel;