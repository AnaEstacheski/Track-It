import React from 'react'
import Header from './Header'
import Menu from './Menu'
import styled from "styled-components"

export default function Habits() {
  return (
    <>
      <HabitsContainer>
        <Header />

        <Menu />
      </HabitsContainer>
    </>
  )
}

const HabitsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 32px;
  background-color: #E5E5E5;

`