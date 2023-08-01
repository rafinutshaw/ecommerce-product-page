import React, { PropsWithChildren } from "react";

export const Pill: React.FC<PropsWithChildren> = (props) => {
  const { children } = props;

  return (
    <span className="px-2 py-1 text-xs rounded-full bg-red-400">
      {children}
    </span>
  );
};

export default Pill;
