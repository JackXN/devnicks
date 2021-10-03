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
          height: "100%"
        }}
      >
        <Particle />
      <Box sx={styles.headerContent}>

      </Box>
      </div>
      </Box>
</>
   
    )
}


const styles = {
    headerContainer: {
        height:  '50vh',
        width: '100%',
        borderRadius:'0 0 50% 50%/0 0 100% 100%',
        transform:'scaleX(1.5)',
        position: 'absolute',
        left: '0',
        top: '0',
        display: 'flex',
    
    },
    headerContent: {
display: 'flex',
alignItems:'center',
justifyContent:'center',
textAlign: 'center',
    }
}

export default Header
