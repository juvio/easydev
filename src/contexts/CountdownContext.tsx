import { createContext, ReactNode, useContext, useState, useEffect } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";

let countdownTimeout: NodeJS.Timeout;

interface CountdownContextData {
    min: number;
    sec: number;
    hasFinished: boolean;
    active: boolean;
    start: () => void;
    restart: () => void;
}

interface CountdownProviderProps {
    children: ReactNode;
}

export const CountdownContext = createContext({} as CountdownContextData);

export function CountdownProvider({children}: CountdownProviderProps) {

    const { startNewChallenge } = useContext(ChallengesContext)
    const [time, setTime] = useState(25 * 60);
    const [active, setActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const min = Math.floor(time/60);
    const sec = time % 60; 

    function start() {
        setActive(true);
    }

    function restart() {
        clearTimeout(countdownTimeout);
        setActive(false);
        setTime(25 * 60);
        setHasFinished(false);
    }

    useEffect(() => {
        if (active && time > 0) {
            countdownTimeout = setTimeout(() => {
                setTime(time - 1);
            }, 1000)
        } else if (active && time === 0) {
            setHasFinished(true);
            setActive(false);
            startNewChallenge();
        }
    }, [active, time])

    return (
        <CountdownContext.Provider value={{
            min,
            sec,
            hasFinished,
            active,
            start,
            restart
        }}>
            {children}
        </CountdownContext.Provider>
    )
}