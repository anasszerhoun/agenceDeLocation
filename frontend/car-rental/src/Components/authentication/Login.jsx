import axios from "axios";
import { useState } from "react";

export default function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  localStorage.removeItem("token"); 
  const handleLogin = async (event) => {
    event.preventDefault(); // Empêcher le rechargement de la page
    try {
      // Envoi des données de connexion via POST
      const response = await axios.get(
        `http://localhost:8080/api/auth/login?mail=${email}&password=${password}`
      );

      console.log("Login response:", response.data);
      response.data.replace("Bearer ", "");
      const token = response.data.replace("Token: Bearer ", "");
      console.log(token);

      if (token) {
        console.log("Login successful, token stored in localStorage:", token);
        localStorage.setItem("token", token);
        window.location.href="/profile"
      } else {
        console.error("Token not found in the response");
      }
    } catch (error) {
      console.error(
        "Login failed:",
        error.response ? error.response.data : error.message
      );
    }
  };
  return (
    <div className="login">
      <h1>Login</h1>
      <form onSubmit={handleLogin}>
        <label>Email</label>
        <input
          type="email"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <label>Password</label>
        <input
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button type="submit">Login</button>
      </form>
    </div>
  );
}
