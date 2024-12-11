import GoogleMapReact from 'google-map-react';

const MapContainer = ({ text }) => <div>{text}</div>;

export default function SimpleMap(){
  const defaultProps = {
    center: {
      lat: 10.99835602,
      lng: 77.01502627
    },
    zoom: 11
  };

  return (
    <div className='rounded shadow-sm position-relative p-4 mb-5 border w-80 m-auto mt-5' >
        <p className='text-primary fw-bold fs-4'>Our Location</p>
        {/* Important! Always set the container height explicitly */}
        <div style={{ height: '400px'}}>
        <GoogleMapReact
            bootstrapURLKeys={{ key: "" }}
            defaultCenter={defaultProps.center}
            defaultZoom={defaultProps.zoom}
            // style={{
            //     elementType: "geometry.fill",
            //     featureType: "all",
            //     stylers: [{color: "#ffffff"}]
            // }}
        >
            <MapContainer
                lat={59.955413}
                lng={30.337844}
                text="My Marker"
            />
        </GoogleMapReact>
        </div>
    </div>
  );
}