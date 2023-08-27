'use client'
import React, { useState } from 'react';
import { Box, Stack } from '@chakra-ui/react';
import ChangeColor from '@/components/changeColor/ChangeColor';
import { FinalPage, Page0, Page3, Page2, Page1 } from '@/components/CV/Pages';
import { GoBack } from '@/components/CV/GoBack';
import { ButtonPrevNext } from '@/components/CV/Button';

export default function CurriculumVitae() {
    const [Page, setPage] = useState(0)

    const handlePage = (page: number) => {
        if (page < 0) {
            return
        }
        if (page > 4) {
            return
        }
        setPage(page)
    }

    return (
        <Stack direction={"column"}>
            <Box
                width={"100%"}
                height={800}
                display={"flex"}
                justifyContent={"center"}
                alignItems={"center"}

            >
                <ChangeColor />
                <GoBack />
                {
                    Page === 0 ?
                        <Page0 />
                        :
                        Page === 1 ?
                            <Page1 />
                            :
                            Page === 2 ?
                                <Page2 />
                                :
                                Page === 3 ?
                                    <Page3 />
                                    :
                                    <FinalPage />
                }
            </Box>
            <ButtonPrevNext Page={Page} handlePage={handlePage} />
        </Stack >
    )
}
