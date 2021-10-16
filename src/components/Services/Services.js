/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import {Container, Flex,Box,Text, Grid, GridItem, SimpleGrid, Image} from '@chakra-ui/react';


const LightBulb = '/LightBulb.png';
const PaintBrush = '/PaintBrush.png';
const GoldPick = '/GoldPick.png';
const Pencil = '/Pencil.png';
const Website = '/Website.png';




const data = [
    {
        id: 1,
        imageSrc:'LightBulb',
        title: 'Development',
        description:'We have amazing Plugin, Web and Bot developers capable of completing any request!'
    },
    {
        id: 2,
        imageSrc:  'Pencil',
        title: 'Graphics',
        description: 'We provide amazing graphic services, from Illustration all the way to Vector Art, Texture Packs and Skin Design!',

    },
    {
        id: 3,
        imageSrc: 'Website',
        title: 'Websites',
        description: 'Our Web designers and developers can design simple home pages all the way to a fully functioning custom forums!',
    },
    {
        id: 4,
        imageSrc: 'GoldPick',
        title: 'Building',
        description: 'Our builders can build anywhere from a small hut to a huge spawn!'
    }
]



function Services() {
    return (
        <Box style={{padding:'20px'}} >
            <Box style={{flexDirection:'column'}}>
        <Text color='primary.orange' sx={styles.title}>Our Services</Text>
        <Text color='primary.gray' sx={styles.subTitle}>View Our Range Of Services</Text>
        </Box>

        {/* Card Container */}

        <SimpleGrid columns={2} spacing={10} padding='20px' alignItems='center' alignContent='center'>
  <Box bg="#242425" height="100%" style={{display: 'flex',}} padding='20px' sx={styles.cardContainer}>
      <Image src={LightBulb} alt='Service Icon' height='100px' sx={styles.cardImg}/>
      <Box>
          <Text as='h1' sx={styles.cardTitle}>Graphic Design</Text>
          <Text as='p' sx={styles.cardDescription}>We provide amazing graphic services, from Illustration all the way to Vector Art, Texture Packs and Skin Design!</Text>
      </Box>
  </Box>

  <Box bg="#242425" height="100%" padding='20px' sx={styles.cardContainer}>
      <Image src={Website} alt='Service Icon' height='100px' sx={styles.cardImg}/>
      <Box>
          <Text as='h1' sx={styles.cardTitle}>Web Development</Text>
          <Text as='p' sx={styles.cardDescription}>We provide amazing graphic services, from Illustration all the way to Vector Art, Texture Packs and Skin Design!</Text>
      </Box>
  </Box>
  <Box bg="#242425" height="100%" style={{display: 'flex',}} padding='20px' sx={styles.cardContainer}>
      <Image src={GoldPick} alt='Service Icon' height='100px' sx={styles.cardImg}/>
      <Box>
          <Text as='h1' sx={styles.cardTitle}>Building</Text>
          <Text as='p' sx={styles.cardDescription}>We provide amazing graphic services, from Illustration all the way to Vector Art, Texture Packs and Skin Design!</Text>
      </Box>
  </Box>

  <Box bg="#242425" height="100%" style={{display: 'flex',}} padding='20px' sx={styles.cardContainer}>
      <Image src={Pencil} alt='Service Icon' height='100px' sx={styles.cardImg}/>
      <Box>
          <Text as='h1' sx={styles.cardTitle}>Writing</Text>
          <Text as='p' sx={styles.cardDescription}>We provide amazing graphic services, from Illustration all the way to Vector Art, Texture Packs and Skin Design!</Text>
      </Box>
  </Box>


</SimpleGrid>




</Box>

    

    )}



const styles ={ 
    title: {
        fontSize: '20px',
        fontFamily: 'Poppins,sans-serif',
    },
    subTitle: {
        fontSize: '19px',
        fontFamily: 'Poppins,sans-serif',   
    },
    cardContainer: {
        borderRadius: '20px',
        display: 'flex',
        flexDirection: ['column', null, null, null ,'row'],
        alignItems:'center',
        textAlign:'center',
        padding: '50px',
        maxWidth: '900px'
    },
    cardTitle: {
        fontSize: '20px',
        fontFamily: 'Poppins,sans-serif',
        color:'primary.orange',
        fontWeight: '900',
    },
    cardDescription: {
        color: '#BBBBBB',
        fontFamily: 'Poppins,sans-serif'
    },
    cardImg: {
        height: '80px',
        width: '80px',
        
    }
  
}



export default Services
