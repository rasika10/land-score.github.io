import React from 'react'
import { Outlet, useNavigate, useLocation } from 'react-router-dom';
import profileImg from "../images/testimonial.png"
import { SearchOutlined  } from "@ant-design/icons";

export default function Header() {
  const navigate = useNavigate()
  const location = useLocation();

  const isDashboardRoute = location.pathname.startsWith('/agent-dashboard');
  return (
    <>
    {!isDashboardRoute && (<header>
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
              <span className="menus" onClick={() => navigate('/property-listings')}>Post Property</span>
              <span className="menus">Blog</span>
              <span className="menus">About</span>
              <span className="menus">Contact</span>
            </nav>

              <div className="headerButtons">
                <button className="secondaryBtn">Signup</button>
                <button className="primaryBtn">Login</button>
              </div>
      </header>)}
      
      <Outlet />
    </>


  )
}
