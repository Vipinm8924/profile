import React, { useState } from 'react';

const AdminPanel = () => {
  const [newProfile, setNewProfile] = useState({ name: '', address: '', photo: '', description: '' });
  const [profiles, setProfiles] = useState([]); // Store all profiles
  const [searchQuery, setSearchQuery] = useState('');
  const [filterQuery, setFilterQuery] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Add the new profile to the list
    setProfiles([...profiles, newProfile]);
    setNewProfile({ name: '', address: '', photo: '', description: '' }); // Clear form after submit
  };

  const handleDelete = (index) => {
    const updatedProfiles = profiles.filter((_, i) => i !== index);
    setProfiles(updatedProfiles); // Remove the profile at the specified index
  };

  // Filter profiles based on search and filter queries
  const filteredProfiles = profiles.filter(profile => {
    const lowercasedSearchQuery = searchQuery.toLowerCase();
    const lowercasedFilterQuery = filterQuery.toLowerCase();
    
    const isMatchingSearch = profile.name.toLowerCase().includes(lowercasedSearchQuery) ||
                              profile.address.toLowerCase().includes(lowercasedSearchQuery) ||
                              profile.description.toLowerCase().includes(lowercasedSearchQuery);

    const isMatchingFilter = !filterQuery || profile.name.toLowerCase().includes(lowercasedFilterQuery) ||
                              profile.address.toLowerCase().includes(lowercasedFilterQuery);

    return isMatchingSearch && isMatchingFilter;
  });

  return (
    <div>
      {/* Form to add new profile */}
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            placeholder="Name"
            value={newProfile.name}
            onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
          />
        </div>
        <div>
          <label>Address:</label>
          <input
            type="text"
            placeholder="Address"
            value={newProfile.address}
            onChange={(e) => setNewProfile({ ...newProfile, address: e.target.value })}
          />
        </div>
        <div>
          <label>Photo URL:</label>
          <input
            type="text"
            placeholder="Photo URL"
            value={newProfile.photo}
            onChange={(e) => setNewProfile({ ...newProfile, photo: e.target.value })}
          />
        </div>
        <div>
          <label>Description:</label>
          <textarea
            placeholder="Description"
            value={newProfile.description}
            onChange={(e) => setNewProfile({ ...newProfile, description: e.target.value })}
          />
        </div>
        {/* Small Add Profile Button */}
        <button type="submit" style={{ width: '120px', padding: '5px 10px', fontSize: '14px' }}>
          Add Profile
        </button>
      </form>

      {/* Search Bar */}
      <div>
        <input
          type="text"
          placeholder="Search profiles..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
        />
      </div>

      {/* Filter Bar */}
      <div>
        <input
          type="text"
          placeholder="Filter by name or address"
          value={filterQuery}
          onChange={(e) => setFilterQuery(e.target.value)}
        />
      </div>

      {/* Display profiles column-wise */}
      <div>
        <h3>Profiles</h3>
        <table border="1">
          <thead>
            <tr>
              <th>Name</th>
              <th>Address</th>
              <th>Photo URL</th>
              <th>Description</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredProfiles.map((profile, index) => (
              <tr key={index}>
                <td>{profile.name}</td>
                <td>{profile.address}</td>
                <td>{profile.photo}</td>
                <td>{profile.description}</td>
                <td>
                  <button onClick={() => handleDelete(index)} style={{ fontSize: '12px' }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminPanel;
