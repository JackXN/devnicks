import React from 'react'
import {Box,Text, Flex, Container, Image} from '@chakra-ui/react';
import Particles from 'react-particles-js';
import Particle from './Particle';
import { stubArray } from 'lodash';


const Logo = '/DLogo.jpeg';

function Header() {
    return (
<>
      <Box style={{background: `url("/HeaderImg.jpeg")`}} sx={styles.headerContainer}>
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          width: "100%",
          height: "100%",
        }}
      >
        <Particle />
      <Flex sx={styles.headerContent}>
<Image src={Logo} alt='Logo' sx={styles.logo}/>
<Text as='h1' sx={styles.title}>Devnics <span style={{fontWeight:'300', fontFamily: 'poppins,sans-serif', color:'#FFC19A'}}>Services</span></Text>
<Text as='p' sx={styles.description}>Devnics Services is a service team providing upto 20 different services, we strive to provide the most high quality and affordable services possible.
By using our fully custom, easy to use ticket system you will for sure have your service being completed in no time.</Text>
      </Flex>
      </div>
      </Box>
</>
   
    )
}


const styles = {
    headerContainer: {
        height:  '80vh',
        width: '100%',
        borderRadius:'0 0 15% 15%/0  20% 20%',
        display: 'flex',
        direction: 'column',
        justify:'center',

        textTransform: 'uppercase'
    
    },
    headerContent: {
alignItems:'center',
textAlign: 'center',
justifyContent:'center',
flexDirection:'column',
mt:'125px',
    },
    logo: {
    height: '100px',
        
    },
    title: {
fontFamily: 'poppins,sans-serif',
fontWeight:'500',
color: 'white',
    },
    description: {
        maxWidth: '400px',
        fontSize: '10px',
        maxWidth: '600px',
        color:'white',
        fontSize: '13px',
        textTransform: 'capitalize',
        lineHeight: '25px',
        fontFamily: 'Poppins,sans-serif',
        fontWeight: '300',
    }
}

export default Header
