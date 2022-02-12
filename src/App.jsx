//App.js
import React from 'react';
import axios from 'axios'
import logo from './logo.svg'
import { FaFacebook, FaTwitter, FaSync, FaQuoteLeft } from "react-icons/fa"

class App extends React.Component
{
 
  
  render ()
  {
  
    return (
     
     <div>
       <nav className='bg-gray-900 h-16 flex justify-between px-4 items-center'>
        <div>
          <a href="#"><img src={logo} className="h-12"/></a>
        </div>
        <div className='text-white flex justify-between items-center space-x-4'>
          <a href="#"> Home</a>
          <a href="#"> Projects</a>
          <a href="#"> About Me</a>
          <a href="#"> Skills</a>
          <a href="#"> Blog</a>
        </div>
       </nav>
     </div>
    );
  }
}

export default App;