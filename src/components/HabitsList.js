import React from 'react'
import axios from "axios"
import { useState, useEffect, useContext } from "react"
import styled from "styled-components"
import { AuthContext } from "../providers/userData"
import del from '../assets/imgs/Group.png'

export default function ({ id, name, days, update, setUpdate }) {
    const weekdays = ["D", "S", "T", "Q", "Q", "S", "S"]

    return (
        <Container>
            <h3>{name}</h3>
            <Wp>
                {weekdays.map((e, i) => {
                    return (
                        <WeekWrapper
                            type="button"
                            key={e}
                        >
                            <p key={i}>
                                {e}
                            </p>
                        </WeekWrapper>
                    );
                })}
            </Wp>
            <img src={del} alt="delete"/>
        </Container>
    )
}

const Container = styled.div`
  width: 340px;
  height: 91px;
  margin-bottom: 30px;
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

    p {
		margin: 8px 10px;
	}
`