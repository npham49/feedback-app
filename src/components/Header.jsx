import React from 'react'
import PropTypes from 'prop-types'

function Header({ text }) {
  return (
    <header>
        <div className='container'>
            <h2>{ text }</h2>
        </div>
    </header>
  )//you can pass a prop into each component
}

Header.defaultProps = {
    text: "Feedback UI",
}//set default prop

Header.propTypes = {
    text: PropTypes.string,
}//set prop type

export default Header