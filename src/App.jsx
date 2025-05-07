import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import PrivateRoute from "./components/PrivateRoute";
import DashboardLayout from "./components/Dashboard/DashboardLayout";
import DashboardHome from "./pages/DashboardHome";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      {/*  */}
      {/*  */}
      {/* Dashboard Layout */}
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<DashboardLayout/>}>
        <Route index element={<DashboardHome />} />
        </Route>
      </Route>
    </Routes>
  );
}

export default App;
