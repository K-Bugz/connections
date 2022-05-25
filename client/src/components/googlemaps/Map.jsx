import React from "react";
import { useLoadScript, GoogleMap, Marker } from "@react-google-maps/api";

export default function Map() {
  const { isLoaded } = useLoadScript({

    // this google key is restricted and designed to be a public key
    googleMapsApiKey: "AIzaSyAWJ3ZVjtQurHIAjq_jxdF3YpXlC5wYOro"
  });

  const renderMap = () => {
    return (
      <GoogleMap
        center={{ lat: 30.266666, lng: -97.733330 }}
        zoom={8}
        mapContainerStyle={{
          margin: "20px 0 0",
          height: "50vh",
          width: "50vh"
        }}
      >
        <Marker
          position={{ lat: 30.266666, lng: -97.733330 }}
        />
      </GoogleMap>
    );
  };

  return isLoaded ? renderMap() : null;
}



