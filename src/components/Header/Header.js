import React from 'react'
import {Box,Text, Flex, Container, Image} from '@chakra-ui/react';
import Particles from 'react-particles-js';
import Particle from './Particle';


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
        borderRadius:'0 0 50% 50%/0 0 100% 100%',
        transform:'scaleX(1.5)',
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
        width:'100px',
        height:'149px'
        
    },
    title: {
fontFamily: 'poppins,sans-serif',
fontWeight:'500',
fontSize: '24px',
color: 'white',

    }
}

export default Header
