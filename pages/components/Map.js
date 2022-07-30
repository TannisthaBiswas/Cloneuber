import React from 'react'
import tw from 'tailwind-styled-components/dist/tailwind'
import mapboxGl from 'mapbox-gl'
import mapboxgl from '!mapbox-gl'
import { useEffect } from 'react'

mapboxGl.accessToken = 
'pk.eyJ1IjoidGFubmlzdGhhIiwiYSI6ImNsM2g5cW81ZzEzcTIzaW5yY3J1MThvdTIifQ.3w232z99PMaM7lfTVPxkKQ';


const Map = (props) => {
    


     useEffect(() => {
    const map = new mapboxGl.Map({
      container: 'map',
      style: 'mapbox://styles/drakosi/ckvcwq3rwdw4314o3i2ho8tph',
      center: [-99.29011, 39.39172],
      zoom: 3,
    })

       if(props.pickupCoordinates){
           addToMap(map, props.pickupCoordinates)
       }
       if(props.dropoffCoordinates){
        addToMap(map, props.dropoffCoordinates)
    }

    if(props.pickupCoordinates && props.dropoffCoordinates){

        map.fitBounds([
            props.dropoffCoordinates,
            props.pickupCoordinates
        ],{ padding: 150
        })
    }


     }, [props.pickupCoordinates, props.dropoffCoordinates])


const addToMap = (map, coordinates) => {
    const marker1 = new mapboxGl.Marker()
    .setLngLat(coordinates)
    .addTo(map);
}


  return (
    <Wrapper id='map'>
      
    </Wrapper>
  )
}

export default Map

const Wrapper = tw.div`
flex-1 h-1/2
`
