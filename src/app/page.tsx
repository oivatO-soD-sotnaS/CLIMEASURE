import Hero from "@/components/Hero";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer"

import MapInterativo from "@/components/map/MapInterativo";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"

export default function Home() {
  return (
    <div className="">
      <NavBar />
      <Hero />
      <div className="p-[5vw] flex flex-col gap-4">
        <h1 className="text-4xl font-bold text-center md:text-left">
          Sobre nosotros
        </h1>
        <p className="">
        Somos un grupo de estudiantes de diversas escuelas del MERCOSUR, conformado por representantes de Argentina, Uruguay, Paraguay y Brasil. Juntos, nos embarcamos en un emocionante proyecto con el objetivo de diseñar un prototipo capaz de sensar factores que puedan contribuir a la generación de energía renovable.
        </p>
      </div>
      <MapInterativo />
      <div className="flex flex-col md:flex-row items-center gap-6 justify-between p-[5vw]">
        <Card className='
        bg-[#1f357a] text-white
        w-[80vw] md:w-[40vw]
        min-h-[50vh] md:h-[40vh]'>
          <CardHeader>
            <CardTitle>ENERGÍA EÓLICA</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
              <h1 className="font-bold">0-10 km/h</h1>
              <p>El promedio de energia que se puede generar con un viento entre 0 km/h y 10 km/h es aproximadamente 3.9 vatios o watts(W).</p>
            </div>
            <div className="flex flex-col gap-4">
              <h1 className="font-bold">10-20 km/h</h1>
              <p>El promedio de energía que se pude generar con un viento es entre 10 km/h y 20 km/h es aproximadamente 35.1 vatios o watts(W)  </p>
            </div>
          </CardContent>
        </Card>       
        <Card className='
        bg-[#1f357a] text-white
        w-[80vw] md:w-[40vw]
        min-h-[50vh] md:h-[40vh]'>
          <CardHeader>
            <CardTitle>ENERGÍA SOLAR</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col gap-4">
                <h1 className="font-bold">1000W DE RADIACÍON SOLAR</h1>
                <p>Un panel solar con una eficiencia del 20% y un área de 1m² puede convertir 1000 W de radiacíon solar incidente en aproximadamente 200 W de energía eléctrica, se necesitarían aproximadamente 5000 Wh de energía solar.</p>
            </div>          
          </CardContent>
        </Card>       
      </div>
      <Footer />
    </div>
  );
}

