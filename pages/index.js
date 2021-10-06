/* eslint-disable @next/next/no-page-custom-font */

import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Container, Box, Flex} from '@chakra-ui/react';
import Particles from 'react-particles-js';
import Head from 'next/head';
import Header from '../src/components/Header/Header';
import Wave from '../src/components/Wave';
import Hero from '../src/components/Hero/Hero';
import theme from "../src/theme/index";
import Services from '../src/components/Services/Services';
export const Bg = '/dottedbackground.png'
export default function Home() {
  return (
   <>
<Head>
  {/* Fonts and such */}
  <link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,200;0,300;0,400;0,500;1,200;1,400;1,500&display=swap" rel="stylesheet"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com" />
<link href="https://fonts.googleapis.com/css2?family=Lobster&display=swap" rel="stylesheet"/>
<link rel="preconnect" href="https://fonts.googleapis.com"/>
<link rel="preconnect" href="https://fonts.gstatic.com"/>
<link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100&display=swap" rel="stylesheet"/>
</Head>
<div style={{background:'url(/dottedbackground.jpeg)'}}>
  <Header style={{height: '20vh',}}/>
{/* <Wave topColor="orange" bottomColor="#ffffff" hashPreset={3} /> */}
<Box style={{height: '100vh'}}>
  <Hero/>
  <Services/>
</Box>
</div>
  </>
  )
}


