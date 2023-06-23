import React from "react";

type Props = {
  type: "text" | "password" | "email" | undefined;
  name: string;
  maxlength?: number;
  minlength?: number;
  placeholder?: string;
  required?: boolean;
  pattern?: string;
  spellcheck?: boolean;
  autocorrect?: "on" | "off" | undefined;
};

const Input = (props: Props) => {
  return (
    <input
      name={props.name}
      type={props.type}
      maxLength={props.maxlength}
      minLength={props.minlength}
      placeholder={props.placeholder}
      required={props.required}
      pattern={props.pattern}
      spellCheck={props.spellcheck}
      autoCorrect={props.autocorrect}
    />
  );
};

export default Input;
