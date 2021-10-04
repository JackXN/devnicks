import React from 'react'
import {
Box,
Container, 
Flex,
Image,
Text,
} from '@chakra-ui/react'
function FeatureCardColumn({title, description, imgSrc}) {
    return (
       <Box sx={styles.card}>
           
<Image src={imgSrc} alt="icon"/>
<Text as='h2' sx={styles.title}>{title}</Text>
<Box sx={styles.description}>
<Text as='p'>{description}</Text>
</Box>
           </Box>
       
    )
}


const styles = {
    card: {
         textAlign:'center',
        boxShadow: '20px 20px 20px rgb(0 0 0 / 20%)',
        borderRadius: '20px',
        padding:'10px 20px',
  background:'#252525',
  margin: '20px',
  maxWidth: '100%',
  fontFamily: 'Poppins,sans-serif',
  textAlign:'center',
  display: 'flex',
  alignItems:'center',
  flexDirection: 'column',
  position: 'relative',
  bottom: '120px',
 
      },
      description: {
          color:'white',
          display:'block',
          marginBlockStart:'0px',
          marginBlockEnd: '1em',
          marginInlineStart:'0px',
          marginInlineEnd:'0px',
          textAlign:'center',
          maxWidth:'300px',
          fontFamily: 'Poppins,sans-serif',
      },
      title: {
          color: 'white',
          textTransform: 'uppercase',
          fontFamily: 'Poppins,sans-serif',
          fontWeight:'black',
          margin: '20px',
        },
      

}
export default FeatureCardColumn
