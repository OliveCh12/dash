import React, { FC } from "react";
import styles from "./button.module.css";

type ButtonProps = {
  color: "primary" | "secondary";
  size: "small" | "medium" | "large";
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  onClick: () => void;
};

const Button: FC<ButtonProps> = (props) => {
  const { color, size, type, onClick, children } = props;
  const buttonClassName = `${styles.button} ${styles[color]} ${styles[size]}`;

  return (
    <button className={buttonClassName} type="button" onClick={onClick}>
      {children}
    </button>
  );
};
export default Button;
