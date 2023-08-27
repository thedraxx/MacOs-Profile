'use client'
import React, { useContext } from 'react';
import { Button, ButtonGroup } from '@chakra-ui/react';
import { ChangeColorContext } from '@/components/context/ChangeColor';

interface ButtonPrevNextProps {
    Page: number
    handlePage: (page: number) => void
}

export const ButtonPrevNext = ({ Page, handlePage }: ButtonPrevNextProps) => {
    const { colorActive } = useContext(ChangeColorContext)
    return (
        <ButtonGroup
            variant="outline"
            spacing="6"
            display={"flex"}
            justifyContent={"center"}
            alignItems={"center"}
            position={{
                base: "fixed",
                md: "relative",
                lg: "absolute",
                xl: "absolute",

            }}
            bottom={0}
            left={0}
            right={0}
            zIndex={100}
        >
            <Button
                colorScheme="gray"
                variant="outline"
                backgroundColor={colorActive}
                color={"white"}
                padding={"25px"}
                onClick={() => {
                    handlePage(Page - 1)
                }}
                isActive={Page === 0}
            >
                {`<`}
            </Button>
            <Button
                colorScheme="gray"
                variant="outline"
                backgroundColor={colorActive}
                onClick={() => {
                    handlePage(Page + 1)
                }}
                color={"white"}
                padding={"25px"}
                isActive={Page === 4}
            >
                {`>`}
            </Button>
        </ButtonGroup>
    )
}
