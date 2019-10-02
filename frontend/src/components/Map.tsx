import React from 'react';
import { 
    Map, 
    GoogleApiWrapper, 
    MapProps,
    mapEventHandler,
    ProvidedProps, 
    GoogleApiOptions 
} from 'google-maps-react'

const MapContainer = (props: ProvidedProps & GoogleApiOptions): any => {
    const loadGeoJSON: mapEventHandler = (
        mapProps: MapProps | undefined,
        map: google.maps.Map | undefined
    ) => {
        if (map !== undefined) {
            map.data.loadGeoJson('https://storage.googleapis.com/mapsdevsite/json/google.json')
        }
    }

    return (
        <Map
          google={props.google}
          zoom={6}
          initialCenter={{lat: 60.171, lng: 24.937}}
          onReady={loadGeoJSON}
        />
    );
}

export default GoogleApiWrapper(
  (props: GoogleApiOptions) => ({
    apiKey: props.apiKey,
  }
))(MapContainer)
