import styles from "../styles/components/CompletedChallanges.module.css";

export function CompletedChallanges(){
    return(
        <div className={styles.ChallangesContainer}>
            <span>Desafios Completos</span>
            <span>5</span>
        </div>
    );
}