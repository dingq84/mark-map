import React from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

interface Props {
  lat?: number;
  lng?: number;
  zoom?: number;
}

const MapView: React.FC<Props> = ({
  lat = 24.05,
  lng = 121,
  zoom = 5,
}: Props) => {
  const position: [number, number] = [lat, lng];

  return (
    <Map center={position} zoom={zoom}>
      <TileLayer
        attribution='&copy <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          A pretty CSS3 popup.
          <br />
          Easily customizable.
        </Popup>
      </Marker>
    </Map>
  );
};
export default MapView;
