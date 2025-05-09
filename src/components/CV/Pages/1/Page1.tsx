'use client'
import React, { useContext } from 'react';
import { Box, Link, Text } from '@chakra-ui/react';
import { SiFirebase, SiMicrosoftsqlserver, SiTypescript } from 'react-icons/si'
import { FaNodeJs, FaReact } from 'react-icons/fa'
import { SiPostgresql } from 'react-icons/si'
import { FaPython } from 'react-icons/fa';
import { SiCsharp } from 'react-icons/si';
import { SiMysql } from 'react-icons/si';
import { SiNextcloud } from 'react-icons/si';
import { ChangeColorContext } from '@/components/context/ChangeColor';

export const Page1 = () => {
    const { colorActive } = useContext(ChangeColorContext)
    return (
        <Box
            marginTop={200}
            marginBottom={200}
            justifyContent="center"
            alignItems="center"
            display="flex"
            flexDirection="column"
            backgroundColor={colorActive}
            paddingTop={200}
            paddingBottom={200}
            width="100%"
        >
            <Text
                fontSize="xl"
                textAlign="center"
                color="black"
                justifyContent="center"
                alignItems="center"
                marginLeft="20px"
                marginRight="20px"
                textColor="white"
                marginBottom={5}
            >
                I am currently working as a backend developer, though I also have hands-on experience with frontend technologies.
            </Text>
            <Box
                w={{
                    base: "100%",
                    sm: "100%",
                    md: "50%",
                    lg: "50%",
                    xl: "50%",
                }}
                justifyContent="center"
                alignItems="center"
                display="flex"
                flexDirection="column"
            >

                <Box
                    justifyContent="center"
                    alignItems="center"
                    display="flex"
                    flexDirection="row"
                >


                    <Link
                        href="https://es.react.dev/"
                    >

                        <FaReact
                            title='React.js / React Native'
                            style={{
                                marginLeft: "10px",
                                marginRight: "10px",
                                marginTop: "10px",
                                color: "white",
                                fontSize: "50px",
                                cursor: "pointer"
                            }}
                        />
                    </Link>


                    <Link
                        href="https://learn.microsoft.com/en-us/ssms/download-sql-server-management-studio-ssms"
                    >

                        <SiMicrosoftsqlserver
                            title='SQL Server'
                            style={{
                                marginLeft: "10px",
                                marginRight: "10px",
                                marginTop: "10px",
                                color: "white",
                                fontSize: "70px",
                                cursor: "pointer"
                            }}
                        />
                    </Link>

                    <Link
                        href="https://www.postgresql.org/"
                    >

                        <FaPython
                            title='PostgreSQL'
                            style={{
                                marginLeft: "10px",
                                marginRight: "10px",
                                marginTop: "10px",
                                color: "white",
                                fontSize: "50px",
                                cursor: "pointer"
                            }}
                        />
                    </Link>

                    <Link

                        href={"https://dotnet.microsoft.com/es-es/"}
                    >
                        <SiCsharp
                            title='Microsoft .NET'
                            style={{
                                marginLeft: "10px",
                                marginRight: "10px",
                                marginTop: "10px",
                                color: "white",
                                fontSize: "50px",
                                cursor: "pointer"
                            }}
                        />
                    </Link>

                    <Link

                        href={"https://nodejs.org/en"}
                    >
                        <FaNodeJs
                            title='Node.js'
                            style={{
                                marginLeft: "10px",
                                marginRight: "10px",
                                marginTop: "10px",
                                color: "white",
                                fontSize: "50px",
                                cursor: "pointer"
                            }}
                        />
                    </Link>
                </Box>
            </Box>
        </Box>
    )
}
