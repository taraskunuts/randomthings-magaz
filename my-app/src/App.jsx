import { Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Buy from "./pages/Buy";

export default function App() {
  return (
    <>
      <nav style={{ display: "flex", gap: "10px", padding: "10px" }}>
        <Link to="/">Головна</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
        <Link to="/buy">Оплата</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/buy" element={<Buy />} />
      </Routes>
    </>
  );
}