import { Box, Button } from '@chakra-ui/react'
import React from 'react'

const ChangeColor = () => {
    return (
        <Box
            width={"100%"}
            height={"100%"}
            display={"flex"}
            position={"absolute"}
            top={0}
            left={0}
            zIndex={100}
            margin={5}
        >
            <Button
                colorScheme="teal"
                variant="outline"
                size="sm"
                backgroundColor={"#E91E63"}
                onClick={() => {
                    console.log("click")
                }}
            />
            <Button
                colorScheme="teal"
                variant="outline"
                size="sm"
                backgroundColor={"#6495ED"}
                onClick={() => {
                    console.log("click")
                }}
            />
            <Button
                colorScheme="teal"
                variant="outline"
                size="sm"
                backgroundColor={"#673AB7"}
                onClick={() => {
                    console.log("click")
                }}
            />


        </Box>
    )
}

export default ChangeColor