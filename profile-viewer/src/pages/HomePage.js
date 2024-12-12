import React, { useState } from 'react';
import ProfileList from '../components/ProfileList';
import MapComponent from '../components/MapComponent';
import AdminPanel from '../components/AdminPanel';

const HomePage = () => {
  const [profiles, setProfiles] = useState([]);
  const [selectedProfile, setSelectedProfile] = useState(null);

  const addProfile = (profile) => setProfiles([...profiles, { ...profile, id: profiles.length + 1 }]);

  return (
    <div className="home-page">
      <AdminPanel addProfile={addProfile} />
      <ProfileList profiles={profiles} onViewDetails={setSelectedProfile} />
      {selectedProfile && <MapComponent location={selectedProfile.address} />}
    </div>
  );
};

export default HomePage;