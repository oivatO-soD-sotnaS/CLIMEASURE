'use client'

import React, { FC, useEffect, useState } from 'react'

//Google Maps API Imports
import {
  APIProvider,
  Map,
} from '@vis.gl/react-google-maps';
//Local Import
import MarkerPopup from './MarkerPopup';
import CircularIndeterminate from '../CircularIndeterminate';
//Prisma imports
import { institute } from '@prisma/client';
//Axios import
import axios from 'axios'


const MapInterativo: FC = () => {
  const center: google.maps.LatLngLiteral = {lat: -27, lng: -56.1000}
  const [institutes, setInstitutes] =  useState<institute[]>()
  const [isLoading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    axios.get('/api/institutes')
      .then((res) => {
        setInstitutes(res.data)
        setLoading(false)
      })
  }, [])

  if (isLoading) return <div className='w-screen h-screen flex justify-center items-center'>
    <CircularIndeterminate />
  </div>
  if (!institutes) return <p>No institutes on DB</p>

  const markers = institutes.map((element) => <MarkerPopup key={element.id_institute} data={element} />)

  return (
    <>
      <APIProvider apiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}>
        <div className='h-screen w-screen'>
          <Map
          scrollwheel={false}
          defaultCenter={center}
          defaultZoom={3.7}
          gestureHandling={'greedy'}
          disableDefaultUI={true}
          mapId={process.env.NEXT_PUBLIC_MAP_ID}
          > 
            {markers}
          </Map>
        </div>
      </APIProvider>
    </>
  )
}


export default MapInterativo