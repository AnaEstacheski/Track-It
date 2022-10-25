import React from 'react'
import axios from "axios"
import { useContext } from "react"
import styled from "styled-components"
import { AuthContext } from "../providers/userData"
import del from '../assets/imgs/Group.png'

export default function ({ id, name, days, setSave, save }) {
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"]
    const { user } = useContext(AuthContext)

    function deleteHabit() {
        const URL = `https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/habits/${id}`
        const config = {
            headers: { Authorization: `Bearer ${user.token}` },
        }

        const promise = axios.delete(URL, config)

        promise.then((res) => {
            console.log(res.data)
            setSave(!save)
        })

        promise.catch((err) => {
            console.log(err.response.data)
        })
    }

    return (
        <Container>
            <h3>{name}</h3>
            <Wp>
                {weekdays.map((e, i) => {
                    return (
                        <WeekWrapper
                            type="button"
                            key={i}
                            style={{
                                backgroundColor: days.includes(i) ? "#CFCFCF" : "transparent",
                                color: days.includes(i) ? "#FFFFFF" : "#CFCFCF"
                            }}
                        >
                            <p key={i}>
                                {e}
                            </p>
                        </WeekWrapper>
                    );
                })}
            </Wp>
            <img src={del} alt="delete" onClick={deleteHabit}/>
        </Container>
    )
}

const Container = styled.div`
  width: 340px;
  height: 91px;
  margin-bottom: 10px;
  background: #FFFFFF;
  border-radius: 5px;
  position: relative;

  img {
    position: absolute;
    top: 0;
    right: 0;
    margin: 11px 10px 0 0;
  }
 
`
const Wp = styled.div`
    display: flex;
    margin: 0 14px;
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
    background-color: ${(props) => props.color};
    color: ${(props) => props.border};

    p {
		margin: 8px 10px;
	}
`