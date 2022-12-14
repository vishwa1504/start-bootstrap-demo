import React from 'react';
import './index.css';
const Footer = ()=>
{
    return(
        <div className='foot'>
            <h2 className='location'>LOCATION</h2>
            <p className='locContent'>2215 John Daniel Drive<br/>Clark, MO 65243</p>
            <h2 className='web'>AROUND THE WEB</h2>
            <img src='./facebook.png' className='facebook'/>
            <img src='./linkedin.png' className='linkedin'/>
            <img src='./twitter.png' className='twitter'/>
            <h2 className='freelancer'>ABOUT FREELANCER</h2>
            <p className='abtContent'>Freelance is a free to use, MIT licensed 
            <br/>Bootstrap theme created by <a href="" className='link'>Start <br/> Bootstrap.</a></p>
           

        </div>
    )
}
export default Footer;