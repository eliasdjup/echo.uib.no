import React, { useRef } from 'react';
import { IoIosMenu } from 'react-icons/io';
import { Box, Center, Flex, IconButton, Img, useColorModeValue, useDisclosure } from '@chakra-ui/react'; // wow very bloat

import NavBar from './navbar';

const imgLogo = '/echo-logo-very-wide-logo-only.png';
const imgLogoText = '/echo-logo-very-wide-text-only.png';
const imgLogoTextWhite = '/echo-logo-very-wide-text-only-white.png';

const Header = (): JSX.Element => {
    const { isOpen, onOpen, onClose } = useDisclosure(); // state for drawer
    const menuButtonRef = useRef<HTMLButtonElement>(null); // ref hook for drawer button
    const logoText = useColorModeValue(imgLogoText, imgLogoTextWhite); // logo version based on color mode
    const bg = useColorModeValue('gray.100', 'gray.900'); // defining color mode colors
    const borderBg = useColorModeValue('gray.300', 'gray.800');

    return (
        <Box bg={bg} mb="40px" pb="15px" borderBottom="1px" borderColor={borderBg} data-testid="header-standard">
            <Flex align="center" justify="center" p="20px">
                <Flex align="center" justify={{ base: 'space-between', sm: 'center' }} w="500px">
                    <Img src={imgLogo} alt="logo" htmlWidth="30%" />
                    <Img display={{ base: 'none', sm: 'block' }} src={logoText} alt="logo-text" htmlWidth="50%" />
                    <IconButton
                        variant="unstyled"
                        ref={menuButtonRef}
                        onClick={onOpen}
                        display={{ base: 'block', sm: 'none' }}
                        aria-label="show navbar"
                        icon={
                            <Center>
                                <IoIosMenu size="2.5em" />
                            </Center>
                        }
                    />
                </Flex>
            </Flex>
            <NavBar isOpen={isOpen} onClose={onClose} btnRef={menuButtonRef} />
        </Box>
    );
};

export default Header;
