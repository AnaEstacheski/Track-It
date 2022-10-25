import React from 'react'
import axios from "axios"
import { useState, useEffect, useContext } from "react"
import { AuthContext } from "../providers/userData"
import Header from './Header'
import Menu from './Menu'
import CreateHabit from './CreateHabit'
import styled from "styled-components"
import HabitsList from './HabitsList'


export default function Habits() {
  const [habits, setHabits] = useState([])
  const [createHbts, setCreateHbts] = useState(false)
  const [save, setSave] = useState(false)
  const { user } = useContext(AuthContext)

  useEffect(() => {
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

    const config = {
      headers: {
        Authorization: `Bearer ${user.token}`
      }
    }

    const promise = axios.get(URL, config)

    promise.then((res) => {
      setHabits(res.data)
      console.log(res)
    })

    promise.catch((err) => console.log(err.response.data))
  }, [save])

  return (
    <>
      <Header />
      <HabitsContainer>

        <AddButton>
          <h2>Meus hábitos</h2>
          <p onClick={() => { setCreateHbts(true) }}>+</p>
        </AddButton>
        {createHbts && (
          <CreateHabit
            setCreateHbts={setCreateHbts}
            setSave={setSave}
            save={save}
          />
        )}
        {(
          (habits.length === 0) ? (
            <p>
              Você não tem nenhum hábito cadastrado ainda. Adicione um hábito para
              começar a trackear!
            </p>
          ) : (
            habits.map((habit) => {
              return (
                <HabitsList
                  id={habit.id}
                  key={habit.id}
                  name={habit.name}
                  days={habit.days}
                  setSave={setSave}
                  save={save}
                ></HabitsList>
              )
            })
          )
        )}
      </HabitsContainer>
      <Menu />
    </>
  )
}

const HabitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 70px;
  font-family: 'Lexend Deca', sans-serif;
  background-color: #E5E5E5;
  

  h2 {
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;
  }

  h3 {
    font-size: 18px;
    line-height: 22px;
    color: #666666;
    margin: 13px 18px 0px 18px;
  }
  
`
const AddButton = styled.div`
  display: flex;
  align-items: center;
  margin: 15px 30px;
  justify-content: space-between;
  width: 100%;

  h2 {
    margin-left: 17px;
  }

  p {
    background-color: #52B6FF;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    width: 28px;
    height: 32px;
    color: #FFFFFF;
    font-size: 27px;
    margin: 4px 20px;
    padding-left: 12px;
    padding-top: 4px;
  }
`