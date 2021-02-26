import Head from 'next/head';
import { ChallengeBox } from '../components/ChallangeBox';
import { CompletedChallanges } from '../components/CompletedChallanges';
import { Countdown } from '../components/Countdown';
import {ExperienceBar} from "../components/ExperienceBar";
import {Profile} from "../components/Profile";
import { CountdownProvider } from '../contexts/CountdownContext';

import style from "../styles/pages/Home.module.css";

export default function Home() {
  return (
    <div className={style.container}>

      <ExperienceBar/>
      <CountdownProvider>
        <section className={style.section}>
          <div className={style.section1}>
            <Profile/>
            <CompletedChallanges/>
            <Countdown/>
          </div>
          <div className={style.section2}>
          <ChallengeBox/>
          </div>
        </section>
      </CountdownProvider>
  </div>
  )
}
