import { GetServerSideProps } from 'next';
import { ChallengeBox } from '../components/ChallangeBox';
import { CompletedChallenge } from '../components/CompletedChallenge';
import { Countdown } from '../components/Countdown';
import {ExperienceBar} from "../components/ExperienceBar";
import {Profile} from "../components/Profile";
import { ChallengesProvider } from '../contexts/ChallengesContext';
import { CountdownProvider } from '../contexts/CountdownContext';

import style from "../styles/pages/Home.module.css";

interface HomeProps {
  level: number
  currentExperience: number
  challengesCompleted: number
}

export default function Home(props: HomeProps) {
  return (
    <ChallengesProvider  
    level={props.level}
    currentExperience={props.currentExperience}
    challengesCompleted={props.challengesCompleted}
    >
      <div className={style.container}>

        <ExperienceBar/>
        <CountdownProvider>
          <section className={style.section}>
            <div className={style.section1}>
              <Profile/>
              <CompletedChallenge/>
              <Countdown/>
            </div>
            <div className={style.section2}>
            <ChallengeBox/>
            </div>
          </section>
        </CountdownProvider>
      </div>
    </ChallengesProvider>
  )
}

export const getServerSideProps: GetServerSideProps = async ctx => {
  const { level, currentExperience, challengesCompleted } = ctx.req.cookies

  return {
    props: {
      level: Number(level),
      currentExperience: Number(currentExperience),
      challengesCompleted: Number(challengesCompleted)
    }
  }
}
