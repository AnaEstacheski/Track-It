import React from 'react'
import axios from "axios"
import { useEffect, useContext } from "react"
import { AuthContext } from "../providers/userData"
import { HabitContext } from "../providers/userHabit"
import getDate from '../aux/date'
import Header from './Header'
import Menu from './Menu'
import TodayCard from './TodayCard'
import styled from "styled-components"


export default function Today() {
  const { user } = useContext(AuthContext)
  const { hb, setHb } = useContext(HabitContext)

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
  }, [])


  return (
    <>
      <TodayContainer>
        <Header />
        <Top>
          <h1>{getDate()}</h1>
          <h2> </h2>
        </Top>
        <TodayCard />
        <Menu />
      </TodayContainer>
    </>
  )
}

const TodayContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  width: 100%;
  font-family: 'Lexend Deca', sans-serif;
  background-color: #E5E5E5;
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