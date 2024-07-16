import clsx from "clsx";
import React from "react";

interface ISecondaryButton {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const SecondaryButton = ({
  children,
  className,
  onClick,
}: ISecondaryButton) => {
  return (
    <button className={clsx("secondary_button", className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default SecondaryButton;
