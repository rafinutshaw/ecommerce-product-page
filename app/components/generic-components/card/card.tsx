import { PropsWithChildren } from "react";
import { CardType } from "./card.types";

export const Card: React.FC<PropsWithChildren<CardType>> = (
  props: PropsWithChildren<CardType>
) => {
  const { children, className = "" } = props;

  return (
    <div className={`shadow-md border rounded p-2 ${className}`}>
      {children}
    </div>
  );
};

export default Card;
