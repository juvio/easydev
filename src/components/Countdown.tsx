import { useEffect, useState, useContext } from "react";
import { ChallengesContext } from '../contexts/ChallengesContext';
import { CountdownContext } from "../contexts/CountdownContext";
import styles from "../styles/components/Countdown.module.css";

let countdownTimeout: NodeJS.Timeout;

export function Countdown(){

    const { min, sec, hasFinished, active, restart, start } = useContext(CountdownContext);
    const [minLeft, minRight] = String(min).padStart(2, '0').split('');
    const [secLeft, secRight] = String(sec).padStart(2, '0').split('');


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