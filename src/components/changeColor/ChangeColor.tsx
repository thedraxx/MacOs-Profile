import { Box, Button } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { ChangeColorContext } from '../context/ChangeColor'

const ChangeColor = () => {

    const { handleChangeColor } = useContext(ChangeColorContext)

    return (
        <>
            <Box
                width={"100%"}
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
                    padding={5}
                    marginLeft={1}
                    onClick={() => {
                        handleChangeColor("#E91E63")
                    }}
                />
                <Button
                    colorScheme="teal"
                    variant="outline"
                    size="sm"
                    padding={5}
                    marginLeft={1}
                    backgroundColor={"#6495ED"}
                    onClick={() => {
                        handleChangeColor("#6495ED")
                    }}
                />
                <Button
                    colorScheme="teal"
                    variant="outline"
                    size="sm"
                    padding={5}
                    marginLeft={1}
                    backgroundColor={"#673AB7"}
                    onClick={() => {
                        handleChangeColor("#673AB7")
                    }}
                />

            </Box>
        </>
    )
}

export default ChangeColor