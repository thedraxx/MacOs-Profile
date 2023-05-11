import { Box, Button, Stack } from '@chakra-ui/react';
import React from 'react'

const ShowFolder = () => {
    return (
        <Box
            bg="rgb(0, 19, 47)"
            color="white"
            zIndex="100"
            display="flex"
            justifyContent="center"
            position={"absolute"}
            marginTop={100}
            marginLeft={100}
            width={"40%"}
            height={"40%"}
        >


            <Box
                display="flex"
                position={"absolute"}
                flexDirection={"row"}
                top={0}
                left={0}
                zIndex="100"
                justifyContent="center"
                alignItems="center"

            >
                <Stack
                    direction="row"
                    spacing={1}
                    align="center"
                    justify="center"
                    marginTop={1}
                    marginLeft={1}
                >

                    <p
                        className="chackraText card "
                        style={{
                            color: "white",
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            marginTop: "0.5rem",
                            marginLeft: "0.5rem",
                            marginRight: "0.5rem",
                            backgroundColor: "rgb(245, 6, 6)",
                            borderRadius: "50%",
                            width: "1rem",
                            height: "1rem",
                        }}

                    >
                        {""}
                    </p>



                    <p
                        className="chackraText card "
                        style={{
                            color: "white",
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            marginTop: "0.5rem",
                            marginLeft: "0.5rem",
                            marginRight: "0.5rem",
                            backgroundColor: "rgb(152, 127, 0)",
                            borderRadius: "50%",
                            width: "1rem",
                            height: "1rem",
                        }}

                    >
                        {""}
                    </p>




                    <p
                        className="chackraText card "
                        style={{
                            color: "white",
                            fontSize: "1.5rem",
                            fontWeight: "bold",
                            marginTop: "0.5rem",
                            marginLeft: "0.5rem",
                            marginRight: "0.5rem",
                            backgroundColor: "rgb(0, 103, 72)",
                            borderRadius: "50%",
                            width: "1rem",
                            height: "1rem",
                        }}

                    >
                        {""}
                    </p>



                </Stack>



            </Box>


        </Box>
    )
}

export default ShowFolder