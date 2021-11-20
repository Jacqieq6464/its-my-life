//import React from 'react'

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "It's My Life Journal",
};
export default Header;
