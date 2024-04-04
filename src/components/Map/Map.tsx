import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { APIProvider, Map ,AdvancedMarker, Pin, InfoWindow } from '@vis.gl/react-google-maps';

const mapContainerStyle = {
  width: '100vw',
  height: '100vh',
};
const center = {
  lat: 35.652832, // default latitude
  lng: 139.839478, // default longitude
};

const LOCALDB_GOOGLEAPI = import.meta.env.VITE_GOOGLEAPI;


const Maps: React.FC = () => {
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey:LOCALDB_GOOGLEAPI,
    libraries: ["places"],
  });

  if (loadError) {
    return <div>Error loading maps</div>;
  }

  if (!isLoaded) {
    return <div>Loading maps</div>;
  }

  return (
    <div>
      <GoogleMap
        mapContainerStyle={mapContainerStyle}
        zoom={10}
        center={center}
      >
        <Marker position={center} />
      </GoogleMap>
    </div>
  );
};

export default Maps;

