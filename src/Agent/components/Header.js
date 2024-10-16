import React from 'react'

export default function Header() {
  return (
    <header>
         <div className="logo">
               <div className="hamburger" id="hamburger" >
            <span></span>
            <span></span>
            <span></span>
        </div>
        <div className="appName">LandZ App</div>
         </div>
     
       
         <div className="search-container">
            <input
                type="text"
                className="search-input"
                placeholder="Search..."
                onChange={"handleInputChange"}
            />
            <button className="search-button">
                <img src={"searchIcon"} alt="Search" className="search-icon" />
            </button>
        </div>
        <div className="profile">
           
        </div>
    </header>
  )
}
