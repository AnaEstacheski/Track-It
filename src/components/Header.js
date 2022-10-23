import styled from "styled-components";
import { AuthContext } from "../aux/auth";
import { useContext, useState } from "react"
import logo from '../assets/imgs/trackIt.png'

export default function Header() {
  return (
   <Top />
  )
}

const Top = styled.div`
    display: flex;
    align-items: center;
    width: 375px;
    height: 70px;
    background-color: #126BA5;
`