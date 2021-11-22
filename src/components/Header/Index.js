//import React from 'react'
import PropTypes from 'prop-types';
import Button from "../Buttons"

const Header = ({ title }) => {
const onClick = () => {
  console.log('click')
}

  return (
    <header className="header">
      <h1>{title}</h1>
      {/* if we require more buttons, then add  after line 14*/}
      <Button color='green' text= 'New Entry' onClick={onClick} />
    </header>
  )
}

Header.defaultProps = {
  title: "It's My Life Journal",
}

{
Header.protoType = {
  title: PropTypes.string.isRequired,

}


}






export default Header;
