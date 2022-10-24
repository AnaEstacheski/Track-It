import React from 'react'
import styled from "styled-components"
import { Link } from "react-router-dom"
import ProgressBar from '../aux/ProgressBar'


export default function Menu() {
  return (
    <Bottom>
      <Link to={"/habits"}  style={{ textDecoration: "none" }}>
        <p>Hábitos</p>
      </Link>
      <Link to={"/hoje"}  style={{ textDecoration: "none" }}>
        <button>
          <ProgressBar
          />
        </button>
      </Link>
      <Link to={"/historic"}  style={{ textDecoration: "none" }}>
        <p>Histórico</p>
      </Link>
    </Bottom>
  )
}

const Bottom = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  position: fixed;
  bottom: 0;
  left: 0;
  background-color: #FFFFFF;
  height: 70px;
  width: 375px;
  z-index: 50;
  

  p {
    font-family: "Lexend Deca", sans-serif;
    color: #52B6FF;
    font-size: 18px;
  }

  button {
    display: flex;
    align-items: center;
    justify-content: center;
    font-family: "Lexend Deca", sans-serif;
    color: #FFFFFF;
    background-color: #52B6FF;
    border: none;
    border-radius: 50%;
    width: 91px;
    height: 91px;
    margin-bottom: 40px;
    font-size: 18px;
  }

`