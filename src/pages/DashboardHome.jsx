import React from 'react'
import DashboardMaterials from '../components/Dashboard/DashboardMaterials'

function DashboardHome() {
  return (
    <div>
      <h1>Dashboard Home</h1>
      <p>Welcome to the dashboard!</p>
      <div className="dashboard-content">
        <h2>Your Materials</h2>
        <DashboardMaterials/>
      </div>
    </div>
  )
}

export default DashboardHome