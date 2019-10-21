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
            const infoBox = document.getElementById('info-box')

            map.data.loadGeoJson('https://cors-anywhere.herokuapp.com/https://drive.google.com/uc?id=18eMOVtiPDEq_kAud1Io5PkzXmYMqvdZh&export=view')

            map.data.setStyle(function(feature) {
              return {
                fillColor: feature.getProperty('coefficientColor'),
                fillOpacity: 0.7,
                strokeWeight: 0,
              }
            })

            map.data.addListener('mouseover', function(event) {
              const country = event.feature.getProperty('ADMIN')
              const value = event.feature.getProperty('coefficient')

              if (infoBox) {
                infoBox.textContent = `${country}: ${value}`;
                infoBox.setAttribute('style', "padding: 10px;")
              }
            });

            map.data.addListener('mouseout', function(event) {
              if (infoBox) {
                infoBox.textContent = ''
                infoBox.removeAttribute('style')
              }
            });
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
