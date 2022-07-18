import React from 'react'
import {Link} from 'react-router-dom'
import {FaQuestion} from 'react-icons/fa'


//when doing react link you should never use an <a> because it is doing a refresh
function AboutIconLink() {
  return (
    <div className='about-link'>
        <Link to='/about'><FaQuestion size={30} /></Link> {/*Any inner site link should be used with <Link> */}
        
    </div>
  )
}

export default AboutIconLink