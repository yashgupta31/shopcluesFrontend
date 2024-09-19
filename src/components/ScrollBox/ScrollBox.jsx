import { Box, Icon, Image, Text } from '@chakra-ui/react'
import React, { useEffect, useRef, useState } from 'react'
import { colors } from '../../colors/colors'
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";
import EachBox from './EachBox';

const ScrollBox = ({ data, title }) => {

    const scrollContainerRef = useRef(null); // Step 1: Creating the ref
    const [showLeftButton, setShowLeftButton] = useState(false);
    const [showRightButton, setShowRightButton] = useState(true);

    const scrollRight = () => {
        if (scrollContainerRef.current) { // Step 3: Using the ref
            scrollContainerRef.current.scrollBy({
                left: 300,
                behavior: 'smooth',
            });
        }
    };

    const scrollLeft = () => {
        if (scrollContainerRef.current) { // Step 3: Using the ref
            scrollContainerRef.current.scrollBy({
                left: -300,
                behavior: 'smooth',
            });
        }
    };

    const handleScroll = () => {
        if (scrollContainerRef.current) {
            const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
            setShowLeftButton(scrollLeft > 0);
            setShowRightButton(scrollLeft < scrollWidth - clientWidth);
        }
    };

    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        if (scrollContainer) {
            scrollContainer.addEventListener('scroll', handleScroll);
            handleScroll(); // Initial check
        }
        return () => {
            if (scrollContainer) {
                scrollContainer.removeEventListener('scroll', handleScroll);
            }
        };
    }, []);

    return (

        <Box bg={'pink'} w={'100%'} h={'25rem'} display={'flex'} flexDirection={'column'} p={'1.5rem 3rem'}>
            <Text fontSize={'xl'} fontWeight={600}>{title}</Text>
            <Box bg={'white'} w={'100%'} h={'18.5rem'} mt={'0.6rem'} display={'flex'} position={'relative'} zIndex={1} >


                {
                    showLeftButton && (
                        <Box bg={colors.primary} h={'4rem'} w={'2.5rem'} onClick={scrollLeft} position={'absolute'} top={'7rem'} fontSize={'2.5rem'} borderRadius={'0px 4px 4px 0px'} display={'flex'} alignItems={'center'} justifyContent={'center'} color={'white'} cursor={'pointer'}>
                            <Icon as={MdKeyboardArrowLeft} />
                        </Box>
                    )
                }

                <Box display={'flex'} overflow="auto" w={'100%'} ref={scrollContainerRef}>
                    {/* --------------each---------- */}
                    {
                        data.map((elem, index) => (
                            <EachBox key={index} elem={elem} />
                        ))
                    }

                </Box>



                {
                    showRightButton && (
                        <Box bg={colors.primary} h={'4rem'} w={'2.5rem'} onClick={scrollRight} position={'absolute'} top={'7rem'} right={0} fontSize={'2.5rem'} borderRadius={'4px 0px 0px 4px'} display={'flex'} alignItems={'center'} justifyContent={'center'} color={'white'} cursor={'pointer'}>
                            <Icon as={MdKeyboardArrowRight} />
                        </Box>
                    )
                }





            </Box>

        </Box>
    )
}

export default ScrollBox