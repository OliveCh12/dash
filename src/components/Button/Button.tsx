import React, { FC } from "react";
import styles from "./button.module.css";

type ButtonProps = {
  color: "primary" | "secondary";
  size: "small" | "medium" | "large";
  type: "button" | "submit" | "reset";
  children: React.ReactNode;
  buttonTips?: string;
  onClick: () => void;
};

const Button: FC<ButtonProps> = (props) => {
  const { color, size, type, onClick, children, buttonTips } = props;
  const buttonClassName = `${styles.button} ${styles[color]} ${styles[size]}`;

  return (
    <button className={buttonClassName} type={type} onClick={onClick}>
      {children} 

      {buttonTips && (
        <span className={styles.buttonTips}>{buttonTips}</span>
      )}
    </button>
  );
};
export default Button;
