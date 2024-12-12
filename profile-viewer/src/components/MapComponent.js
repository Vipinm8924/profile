import React from 'react';
import { GoogleMap, Marker } from '@react-google-maps/api';

const MapComponent = ({ location }) => {
  return (
    <GoogleMap zoom={12} center={location} mapContainerClassName="map-container">
      <Marker position={location} />
    </GoogleMap>
  );
};

export default MapComponent;