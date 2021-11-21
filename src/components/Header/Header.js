//import React from 'react'
import Button from "../Buttons/Button";

const Header = ({ title }) => {
  return (
    <header className="header">
      <h1>{title}</h1>
      <Button />
    </header>
  );
};

Header.defaultProps = {
  title: "It's My Life Journal",
};
export default Header;
