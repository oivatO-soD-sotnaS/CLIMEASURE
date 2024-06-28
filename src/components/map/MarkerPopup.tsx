'use client'

import React, { FC, useEffect, useState } from 'react'

//Google Api Imports
import {
  AdvancedMarker,
  InfoWindow,
} from '@vis.gl/react-google-maps';
//Local Imports
import CircularIndeterminate from '../CircularIndeterminate';
import ResponsiveLineChart from './ResponsiveLineChart';
//React icons imports
import { HiAcademicCap } from "react-icons/hi2";
import { FaCloudRain } from "react-icons/fa";
import { TbSunElectricity } from "react-icons/tb";
import { TbTemperatureSun } from "react-icons/tb";
import { BsMoisture } from "react-icons/bs";
import { FaWind } from "react-icons/fa";
//shadcn-ui Imports
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card"
import {
  Drawer,
  DrawerContent,
  DrawerDescription,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
//Prisma imports
import { institute, report } from '@prisma/client';
//Axios
import axios from 'axios';


type MarkerPopupProps = {
  data: institute
}

const MarkerPopup: FC<MarkerPopupProps> = ({ data }: MarkerPopupProps) => {
  const position = { lat: data.lat, lng: data.lng }
  const cardPosition = { lat: data.lat + 3, lng: data.lng }
  const [reports, setReports] = useState<report[]>()
  const [isLoading, setLoading] = useState<boolean>(true)

  useEffect(() => {
    axios.get('/api/reports?institute=' + data.id_institute)
    .then((res) => {
      setReports(res.data)
      setLoading(false)
  })
  }, [])
  
  if (isLoading) return <CircularIndeterminate />
  if (!reports) return <p>Sem relatórios</p>

  console.log(reports)
  return (
    <>
      <AdvancedMarker
        position={position}
        onClick={() => {return}}
      >
        <HoverCard>
          {/* Conteúdo do drawer de click */}
          <HoverCardTrigger>
            <Drawer>
              <DrawerTrigger>
                <div><img src="/LOGO.png" alt="Map Marker" className='w-8'/></div>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>{data.name}</DrawerTitle>
                  <DrawerDescription>{data.description}</DrawerDescription>
                </DrawerHeader>
                <div 
                className='
                h-[70vh] w-screen
                flex flex-col justify-center items-center gap-6
                md:pl-[5vw] md:pr-[5vw] md:justify-between
                '>
                  <div>
                    <Tabs defaultValue="energy">
                      <TabsList className='flex justify-center p-4'>
                        <TabsTrigger value="energy">Energia Solar</TabsTrigger>
                        <TabsTrigger value="temperature">Temperatura</TabsTrigger>
                        <TabsTrigger value="rain">Chuva</TabsTrigger>
                        <TabsTrigger value="moisture">Umidade</TabsTrigger>
                        <TabsTrigger value="wind">Vento</TabsTrigger>
                      </TabsList>
                      <TabsContent value="energy" className='flex justify-center'>
                        <div className='
                        flex flex-col items-center h-[500px]
                        w-screen p-[5vw]
                        md:flex-row
                        '>
                          <Card className='
                          bg-[#1f357a] text-white
                          '>
                              <CardContent>
                                <div className="
                                flex flex-col justify-center items-center gap-4 p-4
                                w-[80vw]
                                md:w-[20vw]
                                ">
                                  <TbSunElectricity size={100} color='white'/>
                                  <h1>Actual: {reports.at(reports.length - 1)?.solar_energy} W/m²</h1>
                                </div>
                              </CardContent>
                          </Card>       
                          <ResponsiveLineChart dataKey='solar_energy' report={reports}/>
                        </div>

                      </TabsContent>
                      <TabsContent value="temperature" className='flex justify-center'>
                        <div className='
                        flex flex-col items-center h-[500px]
                        w-screen p-[5vw]
                        md:flex-row
                        '>
                          <Card className='
                          bg-[#1f357a] text-white
                          '>
                              <CardContent>
                                <div className="
                                flex flex-col justify-center items-center gap-4 p-4
                                w-[80vw]
                                md:w-[20vw]
                                ">
                                  <TbTemperatureSun size={80} color='white'/>
                                  <h1>Actual: {reports.at(reports.length - 1)?.temperature} °C</h1>
                                </div>
                              </CardContent>
                          </Card>       
                          <ResponsiveLineChart dataKey='temperature' report={reports}/>
                        </div>

                      </TabsContent>
                      <TabsContent value="rain" className='flex justify-center'>
                        <div className='
                        flex flex-col items-center h-[500px]
                        w-screen p-[5vw]
                        md:flex-row
                        '>
                          <Card className='
                          bg-[#1f357a] text-white
                          border-2 border-zinc-950
                          '>
                              <CardContent>
                                <div className="
                                flex flex-col justify-center items-center gap-4 p-4
                                w-[80vw]
                                md:w-[20vw]
                                ">
                                  <FaCloudRain size={100} color='white'/>
                                  <h1>Actual: {reports.at(reports.length - 1)?.rain ? "Está lloviendo" : "No está lloviendo"}</h1>
                                </div>
                              </CardContent>
                          </Card>       
                          <ResponsiveLineChart dataKey='rain' report={reports}/>
                        </div>

                      </TabsContent>
                      <TabsContent value="moisture" className='flex justify-center'>
                        <div className='
                        flex flex-col items-center h-[500px]
                        w-screen p-[5vw]
                        md:flex-row
                        '>
                          <Card className='
                          bg-[#1f357a] text-white
                          border-2 border-zinc-950
                          '>
                              <CardContent>
                                <div className="
                                flex flex-col justify-center items-center gap-4 p-4
                                w-[80vw]
                                md:w-[20vw]
                                ">
                                  <BsMoisture size={100} color='white'/>
                                  <h1>Actual: {reports.at(reports.length - 1)?.moisture} %</h1>
                                </div>
                              </CardContent>
                          </Card>       
                          <ResponsiveLineChart dataKey='moisture' report={reports}/>
                        </div>

                      </TabsContent>
                      <TabsContent value="wind" className='flex justify-center'>
                        <div className='
                        flex flex-col items-center h-[500px]
                        w-screen p-[5vw]
                        md:flex-row
                        '>
                          <Card className='
                          bg-[#1f357a] text-white
                          border-2 border-zinc-950
                          '>
                              <CardContent>
                                <div className="
                                flex flex-col justify-center items-center gap-4 p-4
                                w-[80vw]
                                md:w-[20vw]
                                ">
                                  <FaWind size={100} color='white'/>
                                  <h1>Actual: {reports.at(reports.length - 1)?.wind_speed} Km/h</h1>
                                </div>
                              </CardContent>
                          </Card>       
                          <ResponsiveLineChart dataKey='wind_speed' report={reports}/>
                        </div>

                      </TabsContent>
                    </Tabs>
                  </div>
                </div>
              </DrawerContent>
            </Drawer>

          </HoverCardTrigger>
          {/* Conteúdo do Popup de Hover */}
          <HoverCardContent className='invisible'>
            <InfoWindow position={cardPosition} 
            headerDisabled={true}
            >
              <Card className='max-w-64'>
                <CardHeader>
                  <CardTitle>{data.name}</CardTitle>
                  <CardDescription>{data.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <img src={data.img_src} alt={data.name} className='w-48 m-auto'/>
                </CardContent>
              </Card>            
            </InfoWindow>
          </HoverCardContent>
        </HoverCard>
      </AdvancedMarker> 
    </>
  )
}

export default MarkerPopup