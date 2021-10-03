
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {Container, Box, Flex} from '@chakra-ui/react';
import Particles from 'react-particles-js';
import Head from 'next/head';
import Header from '../src/components/Header/Header';
import Wave from '../src/components/Wave';
import Hero from '../src/components/Hero/Hero';

export default function Home() {
  return (
   <>
<Head>
  {/* Fonts and such */}
</Head>
  <Header style={{height: '20vh'}}/>
{/* <Wave topColor="orange" bottomColor="#ffffff" hashPreset={3} /> */}
<Box style={{height: '100vh'}}>
  <Hero/>
</Box>





  </>
  )
}


