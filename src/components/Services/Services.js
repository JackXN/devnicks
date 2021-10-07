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
        <Box>
            <Flex>
        <Text color='primary.orange'>Our Services</Text>
        <Text color='primary.gray'>View Our Range Of Services</Text>
        </Flex>


</Box>

    

    )}



const styles ={ 
    serviceContainer: {
        display: 'flex',
        flexDirection:'column'
    },
    gridItem: {
width:'500px'
    },
   img: {
       height: '100px',
       float: 'left',
      
   },
   description: {
   },
   cardContent: {
       padding: '20px',
       float:'right'
   }
  
}



export default Services
