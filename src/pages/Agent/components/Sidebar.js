import React from 'react';
import { Link } from 'react-router-dom';
import profileImg from "../images/testimonial.png"

import {
  SettingOutlined, HomeOutlined, UpOutlined, DownOutlined,
  BarChartOutlined, FileDoneOutlined, CommentOutlined, DollarOutlined,
  UserOutlined, LikeOutlined, LogoutOutlined
} from "@ant-design/icons";

export default function Sidebar() {
  const [isDashboardOpen, setIsDashboardOpen] = React.useState(false);
  const [isListingOpen, setIsListingOpen] = React.useState(false);

  const toggleDashboardMenu = () => {
    setIsDashboardOpen(!isDashboardOpen);
  };

  const toggleListingMenu = () => {
    setIsListingOpen(!isListingOpen);
  };

  return (
    <div className="sidebar-container" style={{ display: 'flex', flexDirection: 'column', height: '100vh' }}>
      <div className="sidebar" style={{ flex: 1 }}>
        <ul className="sidebar-list">
          <li className="sidebar-item">
            <Link to="/profile" className="sidebar-link">
              <HomeOutlined className='sidebar-icon' /> Home
            </Link>
          </li>
          <li className="sidebar-item">
            <div onClick={toggleDashboardMenu} className="sidebar-link sidebar-link-list">
              <div>
                <BarChartOutlined className='sidebar-icon' /> Dashboard
              </div>
              {isDashboardOpen ? <UpOutlined className="toggle-icon" /> : <DownOutlined className="toggle-icon" />}
            </div>
            {isDashboardOpen && (
              <ul className="submenu">
                <li className="submenu-item">
                  <Link to="./overview" className="sidebar-link">Overview</Link>
                </li>
                <li className="submenu-item">
                  <div className='notification-menu sidebar-link'>
                    <Link to="/dashboard/notifications" className="">Notifications</Link>
                    <span className='notification-count'>10</span>
                  </div>
                </li>
              </ul>
            )}
          </li>
          <li className="sidebar-item">
            <div onClick={toggleListingMenu} className="sidebar-link sidebar-link-list">
              <div>
                <FileDoneOutlined className='sidebar-icon' /> My Listings
              </div>
              {isListingOpen ? <UpOutlined className="toggle-icon" /> : <DownOutlined className="toggle-icon" />}
            </div>
            {isListingOpen && (
              <ul className="submenu">
                <li className="submenu-item">
                  <Link to="./property-listing" className="sidebar-link">Property Listing</Link>
                </li>
                <li className="submenu-item">
                  <Link to="./land-listing" className="sidebar-link">Land Listing</Link>
                </li>
              </ul>
            )}
          </li>
          <li className="sidebar-item">
            <Link to="./interactions" className="sidebar-link">
              <CommentOutlined className='sidebar-icon' /> Interactions
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="/settings" className="sidebar-link">
              <UserOutlined className='sidebar-icon' /> Leads
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="./subscription" className="sidebar-link">
              <DollarOutlined className='sidebar-icon' /> Subscription
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="./legal-support" className="sidebar-link">
              <LikeOutlined className='sidebar-icon' /> Legal Advise & Support
            </Link>
          </li>
          <li className="sidebar-item">
            <Link to="./account-settings" className="sidebar-link">
              <SettingOutlined className='sidebar-icon' /> Profile Settings
            </Link>
          </li>
        </ul>
      </div>

      {/* Profile Section at Footer */}
      <div className="profile" style={{ display: 'flex', alignItems: 'center', padding: '20px', borderRight: '1px solid #ddd',    justifyContent: 'space-between'}}>
        <img
          src={profileImg}
          alt="Profile"
          style={{
            width: '38px',
            height: '38px',
            borderRadius: '50%',
            marginRight: '15px',
            objectFit: 'cover',
          }}
        />
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontWeight: 'bold', fontSize: '14px' }}>John Doe</span>
          <span style={{ fontSize: '14px', color: '#888' }}>johndoe@emp.com</span>
        </div>
        <div className='logoutContainer'><LogoutOutlined /></div>
      </div>
    </div>
  );
}
