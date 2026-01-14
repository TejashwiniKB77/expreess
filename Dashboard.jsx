import { useContext } from "react";
import { UserContext } from "../context/UserContext";
import { Link, useNavigate } from "react-router-dom";

const Dashboard = () => {
  const { user, logout } = useContext(UserContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <div className="page-center">
      <div className="card">
        <h2>Welcome to Dashboard</h2>
        <p>Hello, <strong>{user?.name}</strong></p>

        <div className="nav">
          <Link className="nav-link" to="/profile">Profile</Link>
          <Link className="nav-link" to="/contact">Contact Us</Link>
          <button className="link-btn" onClick={handleLogout}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
