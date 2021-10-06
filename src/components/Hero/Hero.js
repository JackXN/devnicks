import React from 'react'
import Feature from '../FeatureCards/Feature';
import {Box} from '@chakra-ui/react';

export const Bg = '/dottedbackground.png'
function Hero() {
    return (
   <Box sx={styles.heroContainer}>
            <Feature/>
            </Box>
    )
}


const styles = {
heroContainer: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    position:'relative',
   bottom:['20px', '50px','35px', '60px', '90px'],
   backgroundImage: `url(${Bg})`
}
}


export default Hero
