import { useState } from "react";

export default function Register() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  function handleRegister() {
    setError("");
    if (!username || !password) {
      setError("Заповни всі поля");
      return;
    }

    if (password.length < 4) {
      setError("Пароль має бути мінімум 4 символи");
      return;
    }
    const user = {
      username,
      password,
    };

    localStorage.setItem("user", JSON.stringify(user));

    alert("Реєстрація успішна!");
    setUsername("");
    setPassword("");
  }

  return (
    <div style={{ maxWidth: "300px" }}>
      <h2>Register</h2>

      <input
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />

      <input
        placeholder="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      {error && <p style={{ color: "red" }}>{error}</p>}

      <button onClick={handleRegister}>Create account</button>
    </div>
  );
}
