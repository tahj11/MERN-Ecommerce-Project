import "./App.css";
import Home from "./pages/home/Home";
import Category from "./pages/categories/Category";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import Landing from "./pages/landing/Landing";
import DashBoard from "./pages/dashboard/DashBoard";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="landing" element={<Landing />} />
        <Route path="/user-profile" element={<DashBoard />} />
      </Routes>
    </div>
  );
}

export default App;
