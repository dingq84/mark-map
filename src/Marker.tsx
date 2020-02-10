import React from 'react';
import { Marker, Popup } from 'react-leaflet';

interface Props {
  name: string;
  position: {
    lat: number;
    lng: number;
  };
  undated: string; // 更新時間
  maskAdult: number; // 大人口罩
  maskChild: number; // 小孩口罩
  address: string;
}
const CustomMarker: React.FC<Props> = ({
  name,
  position,
  undated,
  maskAdult,
  maskChild,
  address,
}: Props) => (
  <Marker position={position}>
    <Popup>
      {name}
      <br />
      {address}
      <br />
      {undated}
    </Popup>
  </Marker>
);
export default CustomMarker;
