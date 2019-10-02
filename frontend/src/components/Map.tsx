import React from 'react';
import { 
    Map, 
    GoogleApiWrapper, 
    ProvidedProps, 
    GoogleApiOptions 
} from 'google-maps-react'

const MapContainer = (props: ProvidedProps & GoogleApiOptions) => {
    return (
        <Map
          google={props.google}
          zoom={6}
          initialCenter={{lat: 60.171, lng: 24.937}}
        />
    );
}

export default GoogleApiWrapper(
  (props: GoogleApiOptions) => ({
    apiKey: props.apiKey,
  }
))(MapContainer)
