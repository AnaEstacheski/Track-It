import React from 'react'
import axios from "axios"
import { useState, useEffect, useContext } from "react"
import { AuthContext } from "../providers/userData"
import { HabitContext } from "../providers/userHabit"
import { ProgressContext } from '../providers/userProgress'
import getDate from '../aux/date'
import Header from './Header'
import Menu from './Menu'
import TodayCard from './TodayCard'
import styled from "styled-components"


export default function Today() {
  const { setProgress, progress } = useContext(ProgressContext)
  const { user } = useContext(AuthContext)
  const { hb, setHb } = useContext(HabitContext)
  const [save, setSave] = useState(false)

  useEffect(() => {
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/today"

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }

    const promise = axios.get(URL, config)

    promise.then((res) => {
      setHb(res.data)
      console.log(res)
    })

    promise.catch((err) => console.log(err.response.data))

  }, [save])

  useEffect(() => {
    turnToPercentage()
  }, [hb, progress])
  function turnToPercentage() {
    const doneHabits = hb.filter((h) => h.done)
    const percentage = (
      (doneHabits.length / hb.length) *
      100
    ).toFixed(0);
    setProgress(percentage);
  }

  return (
    <>
      <TodayContainer>
        <Header />
        <Top>
          <h1>{getDate()}</h1>
          <h2> {hb.lenght === 0 ? "Nenhum hábito concluído ainda"
            : `${progress}% dos hábitos concluídos`}
          </h2>
        </Top>
        <TodayCard 
        save={save}
        setSave={setSave}
        />
        <Menu />
      </TodayContainer>
    </>
  )
}

const TodayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  margin-top: 70px;
  width: 100%;
  font-family: 'Lexend Deca', sans-serif;
  background-color: #E5E5E5;
  height: 500px;
`
const Top = styled.div`
  display: flex
  flex-direction: column;
  width: 100%;
  margin: 28px 0 20px 0;

  h1 {
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;
  }

  h2 {
    font-size: 17.976px;
    line-height: 22px;
    color: #BABABA;

  }

  h1, h2 {
    margin: 0 0 6px 17px;
  }

`