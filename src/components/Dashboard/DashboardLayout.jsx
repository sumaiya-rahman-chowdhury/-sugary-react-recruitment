import React from 'react'
import { Outlet } from 'react-router'

function DashboardLayout() {
  return (
    <div>
        <main>
            <div>Navbar</div>
            <Outlet/>
        </main>
    </div>
  )
}

export default DashboardLayout