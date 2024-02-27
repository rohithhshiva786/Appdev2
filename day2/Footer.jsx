// import React from 'react'
import './Footer.css'
import { FaTwitter,FaYoutube,FaInstagram,FaFacebook,FaLinkedin } from 'react-icons/fa'


const  Footer= () => {
  return (
    <div className='Footer'>
        <div className='FooterLogo'>
            <a href=''><FaTwitter/></a>
            <a href=''><FaYoutube/></a>
            <a href=''><FaInstagram/></a>
            <a href=''><FaFacebook/></a>
            <a href=''><FaLinkedin/></a>
        </div>
        <div className='FooterContent'>
            <span className='footeritems'>Bookings</span>
            <span className='footeritems'>Privacy Statements</span>
            <span className='footeritems'>Terms and Conditions</span>
        </div>
        <p className='rights'>By using this site you agree that we can place cookies on your device. See Privacy Statement for details.
© 2024 Festivease. All Rights Reserved.</p>
    </div>
  )
}

export default Footer