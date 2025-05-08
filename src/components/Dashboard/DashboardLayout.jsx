import React from "react";
import { Outlet } from "react-router";
import { Sidebar, Topbar } from "./Navbar";
import Footer from "../Shared/Footer";

function DashboardLayout() {
  return (
    <div>
      <div className="min-h-screen bg-background text-foreground">
        <Sidebar />
        <Topbar />

        <div className="md:ml-64">
          <main className="">
            <Outlet />
          </main>
        </div>
      </div>
     <div className="md:ml-64 lg:ml-64">
     <Footer/>
     </div>
    </div>
  );
}

export default DashboardLayout;
