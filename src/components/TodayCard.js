import React from 'react'
import axios from "axios"
import { useState, useContext } from "react"
import { AuthContext } from "../providers/userData"
import { HabitContext } from "../providers/userHabit"
import check from '../assets/imgs/check.png'
import styled from "styled-components"

export default function TodayCard() {
    const { user } = useContext(AuthContext)
    const { hb } = useContext(HabitContext)
    console.log(hb)
    const [checked, setChecked] = useState([])
    console.log(checked)


    function clicked([id]) {
        const checks = [...checked, id]
        setChecked(checks)
    }

    function postChecked(id) {
        clicked([id])

        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}/check`
        const body = { id }

        const config = {
            headers: {
                Authorization: `Bearer ${user.token}`
            },
        }

        const promise = axios.post(URL, body, config)

        promise.then((res) => {
            console.log(res.data)

        })

        promise.catch((err) => {
            alert('Erro de servidor, tente novamente')
            console.log(err.response.data)
        })
    }


    return (
        <>
            {hb.map((habit) => {
                return (
                    <Card>
                        <Info>
                            <h3>{habit.name}</h3>
                            <p>Sequência atual: {habit.currentSequence} dias</p>
                            <p>Seu recorde: {habit.highestSequence} dias</p>
                        </Info>
                        <Button onClick={() => postChecked(habit.id)}
                           color={habit.done ? "#8FC549" : "#EBEBEB"}
                        >
                            <img src={check} alt="check"></img>
                        </Button>
                    </Card>
                )
            })}

        </>
    )
}

const Card = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 94px;
    width: 340px;
    border-radius: 5px;
    margin-bottom: 10px;
    background-color: #FFFFFF; 
`

const Button = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    width: 69px;
    height: 69px;
    background-color: ${(props) => props.color};
    margin-right: 13px;
    border: 1px solid #E7E7E7;
    border-radius: 5px;
`

const Info = styled.div`
    h3 {
        font-size: 20px;
        line-height: 25px;
        color: #666666;
        margin: 0 15px 8px 15px ;
    }

    p {
        font-size: 13px;
        line-height: 16px;
        color: #666666;
        margin: 2px 15px;
    }
`