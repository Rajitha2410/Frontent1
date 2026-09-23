import "./ProfileCard.css";
import profileImage from "../assets/images/profile.jpg";

const ProfileCard = () => {
  return (
    <div className="profile-card">
      <img
        src={profileImage}
        alt="Profile"
        className="profile-image"
      />

      <h2>kivi</h2>
      <p>Frontend Developer</p>

      <button className="profile-button">
        View Profile
      </button>
    </div>
  );
};

export default ProfileCard;