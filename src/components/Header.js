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
      <header>
        <div className="logo">
          <div className="hamburger" id="hamburger" >
            <span></span>
            <span></span>
            <span></span>
          </div>
          <div className="appName">LandZ App</div>
        </div>
        {isDashboardRoute ?
          (<>  
          {/* <div className="search-container">
            <input
              type="text"
              className="search-input"
              placeholder="Search..."
              onChange={"handleInputChange"}
            />
            <button className="search-button">
              <SearchOutlined className="search-icon" />
            </button>
          </div>  */}
          <div className="profile" style={{ display: 'flex', alignItems: 'center' }}>
              <img
                src={profileImg}
                alt="Profile"
                style={{
                  width: '50px',
                  height: '50px',
                  borderRadius: '50%',
                  marginRight: '15px',
                  objectFit: 'cover',
                }}
              />
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                <span style={{ fontWeight: 'bold', fontSize: '16px' }}>John Doe</span>
                <span style={{ fontSize: '14px', color: '#888' }}>johndoe@example.com</span>
              </div>
            </div></>) : (<><nav className="headerMenus">
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
              </div></>)}
      </header>
      <Outlet />
    </>


  )
}
