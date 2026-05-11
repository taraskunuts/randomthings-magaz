import { Routes, Route, Link } from "react-router-dom";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Buy from "./pages/Buy";
import History from "./pages/History";

export default function App() {
  const navStyle = {
    display: "flex",
    gap: "10px",
    marginBottom: "20px",
  };

  const linkStyle = {
    textDecoration: "none",
    backgroundColor: "black",
    color: "white",
    padding: "10px 15px",
    borderRadius: "8px",
  };

  return (
    <>
      <nav style={navStyle}>
        <Link to="/" style={linkStyle}>
          Головна
        </Link>

        <Link to="/login" style={linkStyle}>
          Login
        </Link>

        <Link to="/register" style={linkStyle}>
          Register
        </Link>
      </nav>

      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/buy/:id" element={<Buy />} />
        <Route path="/history" element={<History />} />
      </Routes>
    </>
  );
}