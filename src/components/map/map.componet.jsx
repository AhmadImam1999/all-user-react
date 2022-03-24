import React from 'react';
import GoogleMapReact from 'google-map-react';
import Pin from '../../assets/map-marker-svgrepo-com.svg';
const AnyReactComponent = ({ text }) => (
  <div className="map">
    <img src={Pin} />
    <h5>{text}</h5>
  </div>
);
function Map({ lat, long, text }) {
  return (
    <div style={{ height: '50vh', width: '100%' }}>
      <GoogleMapReact
        bootstrapURLKeys={{ key: 'AIzaSyDzLC5Aw-EjXNjErP1WeD3RhTO9AyDk_7E' }}
        defaultCenter={{
          lat: parseFloat(lat),
          lng: parseFloat(long),
        }}
        defaultZoom={0}
      >
        <AnyReactComponent
          lat={parseFloat(lat)}
          lng={parseFloat(long)}
          text={text}
        />
      </GoogleMapReact>
    </div>
  );
}

export default Map;
