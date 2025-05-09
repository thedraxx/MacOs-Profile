import { Box, Grid, GridItem, Stack, Text, useBreakpointValue, } from '@chakra-ui/react';
import React, { useContext } from 'react'
import Draggable from 'react-draggable';
import Link from 'next/link';
import Image from 'next/image';
import { ShowFolderContext } from '../context/ShowFolder';
import { ExternalLink } from "lucide-react";
const ShowFolder = () => {

    const { infoFolder, toggleShowFolder, proyects } = useContext(ShowFolderContext);
    const columnSize = useBreakpointValue({
        base: "repeat(2, 1fr)", sm: "repeat(2, 1fr)", md: "repeat(4, 1fr)"
    });
    const rowSize = useBreakpointValue({ base: "1fr", sm: "1fr", md: "1fr" });

    return (
        <Draggable handle=".drag-handle">
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
                    xl: "40%",
                }}
                height={{
                    base: "80%",
                    sm: "75%",
                    md: "70%",
                    lg: "70%",
                    xl: "55%",
                }}
                transition="all ease-in-out"
                borderRadius="10px"
                boxShadow="0px 0px 10px 0px rgba(0, 0, 0, 0.75)"
                transform={"translate(0px, 0px)"}
            >
                {/* 🔥 ÁREA DE DRAG */}
                <Box
                    className="drag-handle" // ← esto es clave para limitar el arrastre
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
                        <div
                            onClick={() => { toggleShowFolder("", "") }}
                            onTouchStart={() => { toggleShowFolder("", "") }}
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
                            aria-label="Cerrar carpeta"
                        />
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
                        />
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
                        />
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
                                marginTop: "0.2rem",
                                justifyContent: "center",
                                alignItems: "center",
                                textAlign: "center",
                            }}
                        >
                            {infoFolder.title}
                        </Text>
                    </Box>
                    <Box
                        display="flex"
                        flexDirection={"row"}
                        justifyContent="center"
                        alignItems="center"
                    />
                </Box>

                {/* 💼 Contenido no draggable */}
                <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    alignItems="center"
                    marginTop={1}
                    w="95%"
                >
                    {proyects.length > 0 ? (
                        <Box p={2}>
                            <Grid
                                templateColumns={columnSize}
                                templateRows={rowSize}
                                gap={4}
                                justifyContent="center"
                                alignItems="center"
                                w="100%"
                                h="100%"
                                marginTop={5}
                            >
                                {proyects.map((proyect, index) => (
                                    <GridItem
                                        key={index}
                                        rowSpan={1}
                                        colSpan={1}
                                        borderRadius="10px"
                                        display="flex"
                                        padding={2}
                                        justifyContent="center"
                                        alignItems="center"
                                        h="100%"
                                    >
                                        <a
                                            href={proyect.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            style={{ textDecoration: "none" }}
                                        >
                                            <Box
                                                cursor="pointer"
                                                display="flex"
                                                flexDirection="column"
                                                justifyContent="center"
                                                alignItems="center"
                                            >
                                                <Image
                                                    src="/firefox.png"
                                                    alt="Project image"
                                                    width={70}
                                                    height={70}
                                                />
                                                <Text
                                                    marginTop={2}
                                                    fontSize={{
                                                        base: "0.7rem",
                                                        sm: "0.7rem",
                                                        md: "0.8rem",
                                                    }}
                                                    textAlign="center"
                                                    display="flex"
                                                    alignItems="center"
                                                    gap="0.25rem"
                                                >
                                                    {proyect.name}
                                                    <ExternalLink size={12} />
                                                </Text>
                                            </Box>
                                        </a>
                                    </GridItem>
                                ))}
                            </Grid>
                        </Box>
                    ) : (
                        infoFolder.description
                    )}
                </Box>
            </Box>
        </Draggable>


    )
}

export default ShowFolder