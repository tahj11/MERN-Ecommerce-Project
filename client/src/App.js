import "./App.css";
import Home from "./pages/home/Home";
import Category from "./pages/categories/Category";
import { Routes, Route } from "react-router-dom";
import Login from "./pages/login/Login";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/categories" element={<Category />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
