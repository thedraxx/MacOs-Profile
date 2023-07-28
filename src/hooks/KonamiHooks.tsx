'use client';

import { useEffect, useState } from "react";

export const useInputEvent = () => {

    const [key, setKey] = useState<any>('');

    useEffect(() => {
        const keyDownHandler = (event: any) => setKey(event.code);
        const keyUpHandler = (event: any) => setKey(null);
        global.addEventListener('keydown', keyDownHandler);
        global.addEventListener('keyup', keyUpHandler);
        return () => {
            global.removeEventListener('keydown', keyDownHandler);
            global.removeEventListener('keyup', keyUpHandler);
        };

    }, []);

    return key;
};

