import { useContext } from 'react';
import { ChallengesContext } from '../contexts/ChallengesContext';
import styles from '../styles/components/Profile.module.css';

export function Profile(){
    const { level } = useContext(ChallengesContext);
    return(
        <div className={styles.profileContainer}>
            <img className={styles.avatar} src="https://github.com/juvio.png" alt="Juliana"/>

            <div>
                <strong>Juliana Vieira</strong>

                <div className={styles.items}>
                    {/* <img className={styles.level} src="icons/level.svg"/> */}
                    <p>Level {level}</p>
                </div>
            </div>
        </div>
    );
}