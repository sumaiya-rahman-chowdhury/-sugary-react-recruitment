import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Dashboard from "./components/Dashboard/Dashboard";
import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route 
        path="/dashboard" 
        element={<PrivateRoute element={<Dashboard />} />} 
      />
            {/* <Route path="/dashboard" element={<Dashboard/>} /> */}
    </Routes>
  );
}

export default App;
