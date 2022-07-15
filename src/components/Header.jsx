import React from 'react'
import PropTypes from 'prop-types';

function Header(props) {
  return (
    <header>
        <div className='container'>
            <h2>{props.text }</h2>
        </div>
    </header>
  )//you can diusd
}

Header.defaultProps = {
    text: "Feedback UI",
}//set default prop

Header.PropTypes = {
    text: PropTypes.string,
}//set prop type

export default Header