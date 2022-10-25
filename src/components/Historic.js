import React from 'react'
import Header from './Header'
import Menu from './Menu'
import styled from 'styled-components'

export default function Historic() {
  return (
    <>
      <Header />
      <HistoricContainer>
        <h2>Histórico</h2>
        <h3>Em breve você poderá ver o histórico dos seus hábitos aqui!</h3>
      </HistoricContainer>
      <Menu />
    </>
  )
}

const HistoricContainer = styled.div`
  display: flex;
  flex-direction: column;
  font-family: 'Lexend Deca', sans-serif;
  
  background-color: #E5E5E5;
  
  h2 {
    margin: 98px 18px 18px 18px;
    font-size: 23px;
    line-height: 29px;
    color: #126BA5;
  }
  
  h3 {
    font-size: 18px;
    margin: 10px 22px 449px 18px;
    line-height: 22px;
    color: #666666;
  }
`