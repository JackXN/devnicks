import React from 'react'
import {Flex,Container, Box, Text, Grid} from '@chakra-ui/react';
import FeatureCardColumn from './FeatureCardColumn';



function Feature() {

const IconOne = '/AgentIcon.svg';
const IconTwo = '/BadgeIcon.svg';
const IconThree = '/MoneyIcon.svg';
const IconFour = '/RocketIcon.svg';




const data = [
    {
        id: 1,
        imgSrc: IconOne,
        title:'Convenient',
        description: 'Our fully custom and easy-to-use ticket system makes it highly convenient to get your project complete in no time!'
    },
    {
        id: 2,
        imgSrc: IconTwo,
        title: 'Reputable',
        description: 'We have worked with many large servers such as SpaceDelta, and content creators like JeromeASF.'
    },
    {
        id: 3,
        imgSrc: IconThree,
        title: 'Affordable',
        description: 'We strive to provide the most affordable services possible!'
    },
    {
        id: 4,
        imgSrc: IconFour,
        title: 'Fast',
        description: 'With over 150 positive reviews, we strive to complete every commission on-time! WHen we said we promise to deliver, we meant it!'
    }
]


    return (
        <Box sx={styles.card}>
{data.map((item) => (
    // eslint-disable-next-line react/jsx-key
    <Box sx={styles.feature}>
<FeatureCardColumn
key={item.id}
title={item.title}
description={item.description}
imgSrc={item.imgSrc}
/>
</Box>

))}
            </Box>

    )
}

const styles ={
    card: {
border:'solid 2px orange',
display: 'flex',
flexDirection:'column',
    },
 

 grid: {
    border: 'solid red 2px'
 }, 
 feature: {
     border: 'solid red 1px',
     padding:'-20px',
     display: 'flex'
 }
}

export default Feature
