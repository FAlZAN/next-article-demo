import clsx from "clsx";
import React from "react";

interface IPrimaryButton {
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
}

const PrimaryButton = ({ children, className, onClick }: IPrimaryButton) => {
  return (
    <button className={clsx("primary_button", className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default PrimaryButton;
