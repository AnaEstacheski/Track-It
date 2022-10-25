import axios from "axios"
import styled from "styled-components"
import { useNavigate, Link } from "react-router-dom"
import { useContext, useState } from "react"
import Loading from "../aux/Loading"
import logo from '../assets/imgs/logo.png'
import { AuthContext } from "../providers/userData"

export default function Login() {
    const { setUser } = useContext(AuthContext)
    const [isClicked, setIsClicked] = useState(false)
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const navigate = useNavigate()

    function login(e) {
        e.preventDefault()
        const URL = "https://mock-api.bootcamp.respondeai.com.br/api/v2/trackit/auth/login"
        const body = { email, password }

        const promise = axios.post(URL, body)

        promise.then((res) => {
            setUser(res.data)
            console.log(res.data)
            navigate("/today")
        })

        promise.catch((err) => {
            alert("login e/ou senha incorreta ou usuário não cadastrado")
            console.log(err)
        })
    }


    return (
        <LoginScreen>
            <img src={logo} alt="logo" />
            <form onSubmit={login}>
                <FormStyle>
                    <input
                        id="email"
                        value={email}
                        type="email"
                        onChange={e => setEmail(e.target.value)}
                        placeholder="email"
                        disabled={isClicked ? true : false}
                        required
                    />

                    <input
                        id="password"
                        value={password}
                        type="password"
                        onChange={e => setPassword(e.target.value)}
                        placeholder="senha"
                        disabled={isClicked ? true : false}
                        required
                    />
                    <button onClick={() => setIsClicked(true)} type="submit">{isClicked ? <Loading /> : "Entrar"}</button>
                </FormStyle>
            </form>
            <Link to={"/register"}><p>Não tem uma conta? Cadastre-se!</p></Link>
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
    background-color: #FFFFFF;

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

    input:disabled {
        background-color: #F2F2F2;
        color: #D4D4D4;
    }

    button {
        display: flex;
        justify-content: center;
        border-style: none;
		color: #ffffff;
        width: 312px;
		height: 45px;
        margin: 2px 36px 6px 36px;
        padding-top: 10px;
		background-color: #52B6FF;
		border-radius: 5px;
        font-family: 'Lexend Deca', sans-serif;
		font-size: 20px;
    }
 `