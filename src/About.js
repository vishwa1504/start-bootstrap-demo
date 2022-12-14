import React from 'react';
import './index.css';
const About = ()=>
{
    return(
        <div className='abt'>
            <h1 className='abtH1'>ABOUT</h1>
            <p className='content1'>Freelancer is a free bootstrap<br/> 
                theme created by Start Bootstrap. <br/> 
                The download includes the complete  <br/> 
                source files including HTML, CSS,<br/>  
                and JavaScript as well as optional SASS <br/> 
                stylesheets for easy customization.</p>
                <p className='content2'>
                You can create your own custom avatar<br/>
                for the masthead, change the icon in the <br/> 
                dividers,and add your email address to the <br/>
                contact form to make it fully functional!<br/>
                </p>
                <button className='btnAbout'>Free Download!</button>
        </div>
    )
}
export default About;