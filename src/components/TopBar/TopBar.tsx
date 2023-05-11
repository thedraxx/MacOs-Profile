import React from 'react'
import { Box } from "@chakra-ui/react"
import Image from 'next/image'

const TopBar = () => {
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

        <Image
          src="/macicon.png"
          alt="Picture of the author"
          width={17}
          height={17}
        />

        <Image
          src="/fullscreen.png"
          alt="Picture of the author"
          width={17}
          height={17}
        />
      </Box>


    </>
  )
}

export default TopBar