import React, { useEffect, useState } from 'react';
import MapView from './Map';

type Location = {
  lat: number;
  lng: number;
};

const App = () => {
  const [userLocation, setUserLocation] = useState<Location>({
    lat: 25,
    lng: 120,
  });
  useEffect(() => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        position => {
          const { latitude: lat, longitude: lng } = position.coords;
          setUserLocation({ lat, lng });
        },
        error => {
          console.log(error);
          alert('無法取得您的位址，使用101為預設座標');
        }
      );
    }
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <MapView userLocation={userLocation} />
      </header>
    </div>
  );
};

export default App;
