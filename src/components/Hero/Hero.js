import React from 'react'
import Feature from '../FeatureCards/Feature';
import {Box} from '@chakra-ui/react';

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

}
}


export default Hero
