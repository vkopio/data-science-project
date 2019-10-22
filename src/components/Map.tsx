import React, { useEffect } from 'react'

declare let google: any
let map: any = undefined

const API_KEY = 'AIzaSyBGTz8L0Ws5kvaUz79PwRw-eDhcygn9WE8'
const MAPS_API = `https://maps.googleapis.com/maps/api/js?key=${API_KEY}`

interface Data {
  data: string
}

const initMapAndData = () => {
    const map = new google.maps.Map(document.getElementById('map'), {
      center: {lat: 60.171, lng: 24.937},
      zoom: 4,
      maxZoom: 6,
      minZoom: 3,
      streetViewControl: false,
    })

    map.data.loadGeoJson('production.geo.json')

    return map
  }

const Map = (props: Data): any => {
  const unit = (data: string) => {
    if (data === 'coefficient') {
      return '(life expectancy / annual PM2.5 mass concentration)'
    } else {
      return '(GDP / annual PM2.5 mass concentration)'
    }
  }

  const initMap = () => {
    const infoBox = document.getElementById('info-box')

    if (!map) {
      map = initMapAndData()
    }

    map.data.setStyle((feature: any) => {
      return {
        fillColor: feature.getProperty(`${props.data}Color`),
        fillOpacity: 0.7,
        strokeWeight: 0,
      }
    })

    map.data.addListener('mouseover', (event: any) => {
      const country = event.feature.getProperty('ADMIN')
      const value = event.feature.getProperty(props.data)

      if (infoBox) {
        infoBox.textContent = `${country}: ${value} ${unit(props.data)}`;
        infoBox.setAttribute('style', "padding: 10px;")
      }
    });

    map.data.addListener('mouseout', (event: any) => {
      if (infoBox) {
        infoBox.textContent = ''
        infoBox.removeAttribute('style')
      }
    });
  }

  const loadGoogleMaps = () => {
      const mapsScript = document.createElement('script')

      mapsScript.setAttribute('src', MAPS_API)
      mapsScript.onload = initMap

      document.body.appendChild(mapsScript)
  }

  const updateGoogleMaps = () => {
    if (map) {
      initMap()
    } else {
      loadGoogleMaps()
    }
  }

  useEffect(() => {
      updateGoogleMaps()
  })

  return (
    <>
      <div id="map"></div>
      <div id="info-box"></div>
    </>
  )
}

export default Map
