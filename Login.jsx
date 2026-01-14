import { useState, useContext } from "react";
import { UserContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const { login } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogin = () => {
    if (!email) {
      alert("Please enter email");
      return;
    }

    // ✅ Create name from email (before @)
    const nameFromEmail = email.split("@")[0];

    const userData = {
      name: nameFromEmail,
      email: email,
    };

    // ✅ Save logged-in user
    login(userData);
    navigate("/dashboard");
  };

  return (
    <div className="page-center">
      <div className="card">
        <h2>Login</h2>

        <input
          className="input"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <button className="btn" onClick={handleLogin}>
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;
