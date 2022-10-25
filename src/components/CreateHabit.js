import React from 'react'
import axios from "axios"
import { useState, useContext } from "react"
import { AuthContext } from "../providers/userData"
import Loading from '../aux/Loading'
import styled from 'styled-components'

export default function CreateHabit({ setSave, save, setCreateHbts }) {
    const [isClicked, setIsClicked] = useState(false)
    const [daySelected, setDaySelected] = useState([])
    const [habitName, setHabitName] = useState("")
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"]
    const { user } = useContext(AuthContext)

    function click(i) {
        if (i === 0) {
            clicked(7)
        } else {
            clicked(i)
        }
    }

    function clicked(i) {
        let isSelected
        if (daySelected.includes(i)) {
            isSelected = daySelected.filter((s) => s !== i)
            setDaySelected(isSelected)
            return
        }
        const dayss = [...daySelected, i]
        setDaySelected(dayss)
    }

    function handleSubmit(e) {
        e.preventDefault()
        const body = {
            name: habitName,
            days: daySelected
        }
        sendHabit(body)
    }

    function sendHabit(body) {
        if (daySelected.length === 0) {
            alert('Selecione os dias corretamente')
        } else if (daySelected.length !== 0 && habitName !== "") {
            setIsClicked(true)
            const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits"

            const config = {
                headers: {
                    Authorization: `Bearer ${user.token}`
                }
            }

            const promise = axios.post(URL, body, config)

            promise.then(() => {
                setCreateHbts(true)
                setHabitName("")
                setDaySelected([])
                setTimeout(() => {
                    setCreateHbts(false)
                    setSave(!save)
                }, 2000)
            })

            promise.catch((err) => {
                alert('Erro de servidor, tente novamente')
                console.log(err.response.data)
            })


        }
    }

    return (
        <>
            <HabitWrapper>
                <form onSubmit={handleSubmit}>
                    <input
                        type="text"
                        onChange={e => setHabitName(e.target.value)}
                        placeholder="nome do hábito"
                        disabled={isClicked ? true : false}
                        required
                    />
                    <SelectDays>
                        {weekdays.map((e, i) => {
                            return (
                                <WeekWrapper
                                    key={i}
                                    onClick={() => click(i)}
                                    disabled={isClicked ? true : false}
                                    style={{
                                        backgroundColor: daySelected.includes(i) || daySelected.includes(i + 7) ? "#CFCFCF" : "transparent",
                                        color: daySelected.includes(i) || daySelected.includes(i + 7) ? "#FFFFFF" : "#CFCFCF"
                                    }}
                                >
                                    <p key={i}>
                                        {e}
                                    </p>
                                </WeekWrapper>
                            )
                        })}
                    </SelectDays>
                    <ButtonsWrapper>
                        <p
                            onClick={() => setCreateHbts(false)}
                        >Cancelar</p>
                        <button

                        >
                            {isClicked ? <Loading /> : "Salvar"}
                        </button>
                    </ButtonsWrapper>
                </form>
            </HabitWrapper>
        </>
    )
}

const HabitWrapper = styled.div`
    background-color: #FFFFFF;
    widht: 340px;
    height: 160px;
    margin-bottom: 29px;
    padding: 18px;
    border-radius: 5px;

   input {
    width: 303px;
    height: 45px;
    font-family: 'Lexend Deca', sans-serif;
    font-size: 18px;
    padding-left: 11px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;
}

    input::placeholder {
        color: #DBDBDB;
    }

    input:disabled {
        background-color: #F2F2F2;
        color: #D4D4D4;
    }
`

const SelectDays = styled.div`
    display: flex;
`


const WeekWrapper = styled.div`
    display: flex;
	justify-content: center;
    align-items: center;
    margin: 8px 4px 0 0;
    height: 30px;
    width: 30px;
    border-radius: 5px;
    border: 1px solid #D4D4D4;

    p {
		margin: 8px 10px;
	}
`

const ButtonsWrapper = styled.div`
    display: flex;
    justify-content: flex-end;
    align-items: center;
    gap: 23px;
    margin-top: 15px;
    
    button {
        border-style: none;
		color: #ffffff;
        width: 84px;
		height: 35px;
        padding-bottom: 2px;
        padding-left: 10px;
   		background-color: #52B6FF;
		border-radius: 4px;
        font-family: 'Lexend Deca', sans-serif;
		font-size: 16px;
    }

    p {
        font-size: 16px;
        line-height: 20px;
        color: #52B6FF;
        
    }

`