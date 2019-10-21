import React from 'react';
import { 
    Map, 
    GoogleApiWrapper, 
    MapProps,
    ProvidedProps, 
    GoogleApiOptions 
} from 'google-maps-react'

const MapContainer = (props: ProvidedProps & GoogleApiOptions): any => {
    const loadGeoJSON: any = (
        mapProps: MapProps | undefined,
        map: google.maps.Map | undefined
    ) => {
        if (map !== undefined) {
            map.data.loadGeoJson('https://cors-anywhere.herokuapp.com/https://drive.google.com/uc?id=18eMOVtiPDEq_kAud1Io5PkzXmYMqvdZh&export=view')

            map.data.setStyle(function(feature) {

              return {
                fillColor: feature.getProperty('fillColor'),
                fillOpacity: 0.6,
                strokeWeight: 0,
              }
            })

        }
    }

    return (
        <Map
          google={props.google}
          zoom={6}
          maxZoom={6}
          minZoom={3}
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
