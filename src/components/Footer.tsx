import React, { FC } from 'react'
import { FiInstagram } from "react-icons/fi";
import { FaFacebook } from "react-icons/fa";
import { FaSquareXTwitter } from "react-icons/fa6";
import ReactCountryFlag from "react-country-flag"

const Footer: FC = ({}) => {
  return (
    <>
      <footer className='bg-[#1f357a] flex flex-col md:flex-row justify-between items-center gap-6 pl-[5vw] pr-[5vw] p-6'>
        <img src="/mercosul-logo.svg" alt="Logo Mercosuk" className='w-16 md:24' />
        <div className='flex gap-12 text-white'>
          <div className='flex flex-col md:flex-row gap-12'>
            <ul className='list-none'>
              <h1 className='text-l font-extrabold'>DISEÑO</h1>
              <li className='text-sm'>
                <ReactCountryFlag countryCode="UY" />
                Melany
              </li>
              <li className='text-sm'>
                <ReactCountryFlag countryCode="PY" />
                Jazmin
              </li>
            </ul>
            <ul className='list-none'>
              <h1 className='text-l font-extrabold'>FRONTEND</h1>
              <li className='text-sm'>
                <ReactCountryFlag countryCode="UY" />
                Jade
              </li>
              <li className='text-sm'>
                <ReactCountryFlag countryCode="BR" />
                Otávio
              </li>
            </ul>
          </div>
          <div className='flex flex-col md:flex-row gap-12'>
            <ul className='list-none'>
              <h1 className='text-l font-extrabold'>BACKEND</h1>
              <li className='text-sm'>
                <ReactCountryFlag countryCode="AR" />
                Luciano</li>
              <li className='text-sm'>
                <ReactCountryFlag countryCode="AR" />
                Bárbara
              </li>
              <li className='text-sm'>
                <ReactCountryFlag countryCode="PY" />
                Santiago
              </li>
              <li className='text-sm'>
                <ReactCountryFlag countryCode="PY" />
                Matias
              </li>
            </ul>
            <ul className='list-none'>
              <h1 className='text-l font-extrabold'>ARDUINO</h1>
              <li className='text-sm'>
                <ReactCountryFlag countryCode="BR" />
                Amanda
              </li>
              <li className='text-sm'>
                <ReactCountryFlag countryCode="UY" />
                Benjamím
              </li>
            </ul>
          </div>
        </div>
        <div className='flex gap-4 text-white items-center'>
          <p className='text-xs'>REDES SOCIALES</p>
          <FiInstagram color='white' size={30}/>
          <FaFacebook color='white' size={30}/>
          <FaSquareXTwitter color='white' size={30}/>
        </div>
      </footer>
    </>
  )
}

export default Footer