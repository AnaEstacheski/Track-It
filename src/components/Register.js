import axios from "axios"
import styled from "styled-components";
import { useNavigate, Link } from "react-router-dom"
import { useState } from "react"
import logo from '../assets/imgs/logo.png'

export default function Register() {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [name, setName] = useState("")
  const [image, setImage] = useState("")
  const navigate = useNavigate()

  function registration(e) {
    e.preventDefault()
    const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/sign-up"
    const body = { email, password, name, image }

    const promise = axios.post(URL, body)

    promise.then(
      navigate("/", {
        state: {
          email: email,
          password: password,
          name: name,
          image: image
        }
      })
    )
    
    console.log(body)

    promise.catch((err) => {
      console.log(err.response.data)
    })
}

  return (
    <LoginScreen>
      <img src={logo} alt="logo" />
      <form onSubmit={registration}>
        <FormStyle>
          <input
            id="email"
            value={email}
            type="email"
            onChange={e => setEmail(e.target.value)}
            placeholder="email"
            required
          />

          <input
            id="password"
            value={password}
            type="password"
            onChange={e => setPassword(e.target.value)}
            placeholder="senha"
            required
          />

          <input
            id="name"
            value={name}
            type="text"
            onChange={e => setName(e.target.value)}
            placeholder="nome"
            required
          />

          <input
            id="image"
            value={image}
            type="url"
            onChange={e => setImage(e.target.value)}
            placeholder="foto"
            required
          />
          <button type="submit">Cadastrar</button>
        </FormStyle>
      </form>
      <Link to={"/"}><p>Já tem uma conta? Faça login</p></Link>
    </LoginScreen>
  )
}

const LoginScreen = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 68px;
  font-family: 'Lexend Deca', sans-serif;

  img {
  height: 180px;
  width: 178px;
  }

  p {
  color: #52B6FF;
  font-size: 14px;
  text-decoration: underline;
  margin-top: 20px;
  }
`

const FormStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  margin-top: 32px;

  input {
    margin: 2px 36px 6px 36px;
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

  button {
    border-style: none;
		color: #ffffff;
    width: 312px;
		height: 45px;
    margin: 2px 36px 6px 36px;
		background-color: #52B6FF;
		border-radius: 5px;
    font-family: 'Lexend Deca', sans-serif;
		font-size: 20px;
  }
`