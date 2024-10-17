import React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'

export default function Header() {
  const navigate = useNavigate()
  return (
    <>
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
            <option value="property-listings" >Property Listings</option>
          </select>
          <span className="menus" onClick={() => navigate('/property-listings')}>Listings</span>
          <span className="menus">Post Property</span>
          <span className="menus">Blog</span>
          <span className="menus">About</span>
          <span className="menus">Contact</span>
        </nav>

        <div className="headerButtons">
          <button 
          className="secondaryBtn"
          onClick={() => navigate('/signup')}
          >
            Signup
            </button>
          <button
            className="primaryBtn"
            onClick={() => navigate('/login')}
          >
            Login
          </button>
        </div>
      </header>
      <Outlet />
    </>


  )
}
