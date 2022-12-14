import React from 'react';
import Navbar from './Navbar';
import Content from './Content';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';

const App = ()=>
{
    return(

        <div>
            <Navbar/>
            <Content/>
            <Portfolio/>
            <About/>
            <Contact/>
            <Footer/>

        </div>
    )
}
export default App;