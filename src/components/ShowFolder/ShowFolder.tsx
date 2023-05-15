import { Box, Button, Grid, Stack, Text, } from '@chakra-ui/react';
import React, { useContext } from 'react'
import Draggable from 'react-draggable';
import { ShowFolderContext } from '../context';

const ShowFolder = () => {

    const { infoFolder, toggleShowFolder, proyects } = useContext(ShowFolderContext);

    return (
        <Draggable>
            <Box
                bg="#2D3748"
                color="white"
                zIndex="100"
                display="flex"
                justifyContent="center"
                position={"absolute"}
                marginTop={300}
                marginLeft={50}
                width={{
                    base: "90%",
                    sm: "80%",
                    md: "70%",
                    lg: "60%",
                    xl: "50%",
                }}
                height={{
                    base: "60%",
                    sm: "50%",
                    md: "50%",
                    lg: "50%",
                    xl: "50%",
                }}
                transition="all ease-in-out"
                borderRadius="10px"
                boxShadow="0px 0px 10px 0px rgba(0, 0, 0, 0.75)"
                transform={
                    "translate(0px, 0px)"
                }
            >

                <Box
                    display="flex"
                    position={"absolute"}
                    flexDirection={"row"}
                    top={0}
                    left={0}
                    zIndex="100"
                    justifyContent={"space-between"}
                    alignItems="center"
                    width={"100%"}
                    height={"auto"}
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
                            onClick={() => { toggleShowFolder("", "") }}
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
                                textDecoration: "none",
                                cursor: "pointer"

                            }}
                        >
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
                        </p>
                    </Stack>

                    <Box
                        display="flex"
                        flexDirection={"row"}
                        justifyContent="center"
                        alignItems="center"
                        marginTop={1}
                    >
                        <Text
                            className="chackraText card "
                            style={{
                                color: "white",

                                fontWeight: "bold",
                                marginTop: "0.5rem",
                                marginLeft: "0.5rem",
                                marginRight: "0.5rem",
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                            }}

                        >
                            {
                                infoFolder.title
                            }
                        </Text>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection={"row"}
                        justifyContent="center"
                        alignItems="center"
                    />
                </Box>
                <Box
                    display="flex"
                    flexDirection={"row"}
                    justifyContent="center"
                    alignItems="center"
                    marginTop={1}
                    w={"85%"}

                >
                    {
                        proyects.length > 0 ?
                            <Grid templateColumns="repeat(1, 1fr)" gap={2}>
                                {
                                    proyects.map((proyect, index) => (
                                        <Button
                                            key={index}
                                            colorScheme="teal"
                                            variant="outline"
                                            size="lg"
                                            onClick={() => { toggleShowFolder("", "") }}
                                        >
                                            {proyect}
                                        </Button>
                                    ))


                                }

                            </Grid>
                            :
                            infoFolder.description
                    }
                </Box>
            </Box>
        </Draggable>

    )
}

export default ShowFolder