import React from 'react';
import Sidebar from '../components/Sidebar';
import { Routes, Route } from 'react-router-dom';
import "../agent.css";
import LandList from './LandList';
import PropertyListing from './PropertyListing';
import Home from './Home';
import Interactions from "./Interactions";

export default function AgentDashboard() {
  return (
    <div style={{ display: 'flex' }}>
      <Sidebar />
      <div style={{ padding: '20px', flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="overview" element={<Home />} />
          <Route path="property-listing" element={<PropertyListing />} />
          <Route path="land-listing" element={<LandList/>} />
          <Route path="interactions" element={<Interactions/>} />
          <Route path="track-verification-status" element={<div>Track Verification Status</div>} />
        </Routes>
      </div>
    </div>
  );
}
