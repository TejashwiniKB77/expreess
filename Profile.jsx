import { useContext } from "react";
import { UserContext } from "../context/UserContext";

const Profile = () => {
  const { user } = useContext(UserContext);

  if (!user) {
    return <p style={{ textAlign: "center" }}>No user logged in</p>;
  }

  return (
    <div className="page-center">
      <div className="card profile-card">
        <h2 className="profile-title">Profile</h2>

        <div className="profile-info">
          <p>
            <span>Name</span>
            <strong>{user.name}</strong>
          </p>

          <p>
            <span>Email</span>
            <strong>{user.email}</strong>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Profile;
