import React from 'react';

const ProfileCard = ({ profile, onViewDetails }) => {
  return (
    <div className="profile-card">
      <img src={profile.photo} alt={profile.name} />
      <h3>{profile.name}</h3>
      <p>{profile.description}</p>
      <button onClick={() => onViewDetails(profile)}>View Details</button>
    </div>
  );
};

export default ProfileCard;