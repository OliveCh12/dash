import React from "react";
import Input from "../../components/Input/Input";

type Props = {
  username: string;
};

const Header = (props: Props) => {
  return (
    <header className="header">
      <div className="header__section">
        <h1>Hey, {props.username}</h1>
      </div>
      <div className="header__section">
        <Input name="search" type="text" placeholder="Search" />
      </div>
    </header>
  );
};

export default Header;
