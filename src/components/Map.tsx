import React from 'react';
import { 
    Map, 
    GoogleApiWrapper, 
    MapProps,
    ProvidedProps, 
    GoogleApiOptions 
} from 'google-maps-react'

interface Data {
  data: string
}

const MapContainer = (props: ProvidedProps & GoogleApiOptions & Data): any => {
    const loadGeoJSON: any = (
        mapProps: MapProps | undefined,
        map: google.maps.Map | undefined
    ) => {
        if (map !== undefined) {
            const infoBox = document.getElementById('info-box')
            map.data.loadGeoJson('https://cors-anywhere.herokuapp.com/https://drive.google.com/uc?id=18eMOVtiPDEq_kAud1Io5PkzXmYMqvdZh&export=view')

            map.data.setStyle((feature) => {
              return {
                fillColor: feature.getProperty(`${props.data}Color`),
                fillOpacity: 0.7,
                strokeWeight: 0,
              }
            })

            map.data.addListener('mouseover', (event) => {
              const country = event.feature.getProperty('ADMIN')
              const value = event.feature.getProperty(props.data)

              if (infoBox) {
                infoBox.textContent = `${country}: ${value}`;
                infoBox.setAttribute('style', "padding: 10px;")
              }
            });

            map.data.addListener('mouseout', (event) => {
              if (infoBox) {
                infoBox.textContent = ''
                infoBox.removeAttribute('style')
              }
            });
        }
    }

    const renderMap = (value: string) => {
      return (
        <Map
          google={props.google}
          zoom={6}
          maxZoom={6}
          minZoom={3}
          initialCenter={{lat: 60.171, lng: 24.937}}
          onReady={loadGeoJSON}
          onClick={loadGeoJSON}
        />
    )
    }

    return renderMap(props.data)
}

export default GoogleApiWrapper(
  (props: GoogleApiOptions) => ({
    apiKey: props.apiKey,
  }
))(MapContainer)
