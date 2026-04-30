import { Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Buy from "./pages/Buy";

export default function App() {
  return (
    <>
      <nav>
        <Link to="/">Головна</Link>
        <Link to="/login">Login</Link>
        <Link to="/register">Register</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/buy/:id" element={<Buy />} />
      </Routes>
    </>
  );
}