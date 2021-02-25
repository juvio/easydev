import { useEffect, useState, useContext } from "react";
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from "../styles/components/Countdown.module.css";

let countdownTimeout: NodeJS.Timeout;

export function Countdown(){
    const { startNewChallenge } = useContext(ChallengesContext);
    const [time, setTime] = useState(0.1*60); 
    const [active, setActive] = useState(false);
    const [hasFinished, setHasFinished] = useState(false);

    const min = Math.floor(time/60);
    const sec = time % 60;

    const [minLeft, minRight] = String(min).padStart(2, '0').split('');
    const [secLeft, secRight] = String(sec).padStart(2, '0').split('');

    const start = () => {
        setActive(true);
    }

    const restart = () => {
        clearTimeout(countdownTimeout);
        setActive(false);
        setTime(25*60);
    }

    useEffect(() => {
        if(active && time > 0 ){
            countdownTimeout = setTimeout(() => {
                setTime(time-1);
            }, 1000)
        }else if(active && time === 0){
            setHasFinished(true);
            setActive(false);
            startNewChallenge();
        }
    }, [active, time])

    return(
        <div className={styles.countdownContainer}>
            <div className={styles.first}>
                <div>
                    <span >{minLeft}</span>
                    <span>{minRight}</span>
                </div>
                <span>:</span>
                <div>
                    <span>{secLeft}</span>
                    <span>{secRight}</span>
                </div>
            </div>

            {hasFinished ? (
                <button className={styles.start} disabled>
                    Ciclo Encerrado 
                </button>) : (
                <>
                    {active ? (
                    <button type="button" className={`${styles.start} ${styles.startActive}`} 
                        onClick={() => {
                            restart()
                    }}>
                        Cancelar Ciclo     
                        </button>
                    ) : (
                    <button type="button" className={styles.start} 
                        onClick={() => {
                            start()
                        }}>
                        Iniciar um Ciclo 
                    </button>
                    )}

                </>
            )}
 
        </div>
    );
}