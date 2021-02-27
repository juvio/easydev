import { useContext } from "react";
import { ChallengesContext } from "../contexts/ChallengesContext";
import styles from "../styles/components/completedChallenge.module.css";

export function CompletedChallenge(){
    const { challengesCompleted } = useContext(ChallengesContext)
    return(
        <div className={styles.ChallangesContainer}>
            <span>Desafios Completos</span>
            <span>{challengesCompleted}</span>
        </div>
    );
}