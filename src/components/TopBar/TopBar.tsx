import React, { useState } from 'react';
import { Box, Button } from "@chakra-ui/react";
import Image from 'next/image';

const TopBar: React.FC = () => {
  const [isFullscreen, setIsFullscreen] = useState<boolean>(false);

  const handleFullscreenChange = () => {
    setIsFullscreen(document.fullscreenElement !== null);
  };

  const toggleFullscreen = () => {
    if (!isFullscreen) {
      document.documentElement.requestFullscreen();
    } else {
      document.exitFullscreen();
    }
  };

  if (typeof document !== 'undefined') {
    document.addEventListener('fullscreenchange', handleFullscreenChange);
  }

  return (
    <>
      <Box
        bg="rgba(255, 255, 255, 0.699)"
        w="100%"
        p={2}
        color="white"
        top="0"
        left="0"
        zIndex="100"
        display="flex"
        justifyContent="space-between"
      >

        <Button
          bg="rgba(255, 255, 255, 0.699)"
          p={2}
          color="white"
          top="0"
          left="0"
          zIndex="100"
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={(e) => {
          }}

        >

          <Image
            src="/macicon.png"
            alt="Picture of the author"
            width={20}
            height={20}
          />

        </Button>


        <Button
          bg="rgba(255, 255, 255, 0.699)"
          p={2}
          color="white"
          top="0"
          left="0"
          zIndex="100"
          display="flex"
          justifyContent="center"
          alignItems="center"
          onClick={toggleFullscreen}

        >
          <Image
            src="/fullscreen.png"
            alt="Picture of the author"
            width={17}
            height={17}
          />
        </Button>

      </Box>


    </>
  )
}

export default TopBar;