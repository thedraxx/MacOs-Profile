import { useInputEvent } from "./KonamiHooks"
import { useEffect, useState } from "react";

const konamiCode = [
    'ArrowUp',
    'ArrowUp',
    'ArrowDown',
    'ArrowDown',
    'ArrowLeft',
    'ArrowRight',
    'ArrowLeft',
    "KeyB",
    "KeyA"
]

const useKonamiCode = () => {
    const key = useInputEvent();
    const [isKonamiCodeActivated, setisKonamiCodeActivated] = useState(false)

    useEffect(() => {
        if (key == null) return;

        if (key === konamiCode[konamiCode.length - 1]) {
            console.log('Konami Code Activated');
            setisKonamiCodeActivated(true);
            setTimeout(() => {
                setisKonamiCodeActivated(false);
            }, 7000);
            return;
        }
    }, [key])
    return isKonamiCodeActivated;
}

export default useKonamiCode