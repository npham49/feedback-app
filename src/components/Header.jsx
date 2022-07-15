import React from 'react'
import PropTypes from 'prop-types'

function Header({ text, bgColor, textColor }) {


    const headerStyles = {
        backgroundColor : bgColor,
        color: textColor,
    }// we can have CSS inside of a const
  return (
    <header style={ headerStyles }>
        <div className='container'>
            <h2>{ text }</h2>
        </div>
    </header>
  )//you can pass a prop into each component
}

Header.defaultProps = {
    text: "Feedback UI",
    bgColor: 'rgba(0,0,0,0.4)',
    textColor: '#ff6a95',
}//set default prop

Header.propTypes = {
    text: PropTypes.string,
    bgColor: PropTypes.string,
    textColor: PropTypes.string,
}//set prop type to be input in the main component

export default Header