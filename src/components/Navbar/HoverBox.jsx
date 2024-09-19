// import { Box } from '@chakra-ui/react'
// import React from 'react'

// const HoverBox = ({HoverData}) => {
//     return (
//         <Box bg={'red'} h={'24rem'} w={'45rem'} position={'absolute'} top={'7.5rem'} left={'24rem'} >
//             {HoverData}
//         </Box>
//     )
// }

// export default HoverBox

import { Box, Heading, Text } from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
// import './HoverBox.css';

const HoverBox = ({ hoveredItem }) => {
    
  return (
   
<Box p={4} display={'flex'}>
          {hoveredItem.links.map((category, index) => (
            <Box key={index} m={4}>
              <Text fontWeight={600} >{category[0]}</Text>
              {category.slice(1).map((link, subIndex) => (
                <Text key={subIndex}>{link}</Text>
              ))}
            </Box>
          ))}
        </Box>
  );
};

export default HoverBox;
