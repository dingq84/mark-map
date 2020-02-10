import React, { useEffect } from 'react';
import {
 Map, TileLayer, Marker, Popup 
} from 'react-leaflet';
// import 'leaflet/dist/leaflet.css';

interface Props {
  lat?: number;
  lng?: number;
  zoom?: number;
  userLocation: {
    lat: number;
    lng: number;
  };
}

const MapView: React.FC<Props> = ({
  lat = 24.05, // 緯度
  lng = 121, // 經度
  zoom = 13,
  userLocation,
}: Props) => {
  const position = userLocation;
  useEffect(() => {
    const url: string = process.env.REACT_APP_API_URL;
    fetch(url)
      .then(res => res.json())
      .then(data => console.log(data));
  }, []);
  return (
    <Map center={position} zoom={zoom} animate>
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
      <Marker position={[25.050063, 121.544742]}>
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
