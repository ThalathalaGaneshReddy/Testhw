import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';


const Map = ({cities}) => {
  
  return (
    <MapContainer center={[0, 0]} zoom={2} style={{ height: '500px', width: '100%' }}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      {cities.map((city,index) => (
        <Marker key={city.name+index} position={[city.lat, city.long]}>
          <Popup>{city.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  );
};

export default Map;