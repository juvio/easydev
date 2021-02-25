import { useEffect, useState } from "react";
import styles from "../styles/components/Countdown.module.css";

export function Countdown(){
    const [time, setTime] = useState(25*60);
    const [active, setActive] = useState(false);

    const min = Math.floor(time/60);
    const sec = time % 60;

    const [minLeft, minRight] = String(min).padStart(2, '0').split('');
    const [secLeft, secRight] = String(sec).padStart(2, '0').split('');

    const start = () => {
        setActive(true);
    }

    useEffect(() => {
        if(active && time > 0 ){
            setTimeout(() => {
                setTime(time-1);
            }, 1000)
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

            <button type="button" className={styles.start} 
            onClick={() => {
                start()
            }}>
                Iniciar um Ciclo
            </button>
        </div>
    );
}