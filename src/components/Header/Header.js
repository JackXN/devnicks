import React from 'react'
import {Box,Text, Flex, Container, Image} from '@chakra-ui/react';
import Particles from 'react-particles-js';
import Particle from './Particle';
import { stubArray } from 'lodash';
import Data from './HeaderData';



const Logo = '/DLogo.jpeg';

function Header() {
    return (
<>
      <Box style={{background: `url("/HeaderImg.jpeg")`, backgroundPosition: 'center'}} sx={styles.headerContainer}>
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
        height:  '50vh',
        width: '100%',
        borderRadius:'0 0 25% 25%/0  100% 100%',
        
        
        justify:'center',
        textTransform: 'uppercase',
        


       
        
    },
    headerContent: {
alignItems:'center',
textAlign: 'center',
justifyContent:'center',
flexDirection:'column',
mt: '50px',
    },
    logo: {
    height: '100px',
        
    },
    title: {
fontFamily: 'Poppinskz,sans-serif',
fontWeight:'500',
color: 'white',
fontSize: '24px',
letterSpacing: '0.2rem',

    },
    description: {
        maxWidth: '400px',
        fontSize: '10px',
        maxWidth: ['350px', '420px'],
        color:'white',
        fontSize: '13px',
        textTransform: 'capitalize',
        lineHeight: '1.5',
        fontFamily: 'Poppins,sans-serif',
        fontWeight: '300',
        letterSpacing: '1.3px',
        mt: '20px',
        
    }
}

export default Header
