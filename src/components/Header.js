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
     
        <nav className="headerMenus">
            <select>
                <option value="property-listings">Property Listings</option>
            </select>
            <span className="menus">Post Property</span>
            <span className="menus">Blog</span>
            <span className="menus">About</span>
            <span className="menus">Contact</span>
        </nav>

        <div className="headerButtons">
            <button className="secondaryBtn">Signup</button>
            <button className="primaryBtn">Login</button>
        </div>
    </header>
  )
}
