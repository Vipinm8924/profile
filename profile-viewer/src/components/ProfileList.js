import React from 'react';
import ProfileCard from './ProfileCard';

const ProfileList = ({ profiles, onViewDetails }) => {
  return (
    <div className="profile-list">
      {profiles.map(profile => (
        <ProfileCard key={profile.id} profile={profile} onViewDetails={onViewDetails} />
      ))}
    </div>
  );
};

export default ProfileList;