import React from 'react';
import logo from '../assets/logo'
import '../App.css';


export default function Home(){
    return (
        <div className="Logo">
          <header className="Logo-header">
            <h1>
              This is my first React App, so go easy on me please.
            </h1>
          </header>
          <div className="image-container">
          <img  style={{ width: 700, height: 650 }} src={logo[0]}  alt={logo}/>
          </div>
        </div>
      );

}

