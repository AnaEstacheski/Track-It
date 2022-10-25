import styled from "styled-components";
import { AuthContext } from "../providers/userData";
import { useContext } from "react"
import logo from '../assets/imgs/trackIt.png'

export default function Header() {
    const { user } = useContext(AuthContext)

    return (
        <Top>
            <img src={logo} alt="logo" />
            <div>
                <img src={user.image} alt="userImage" />
            </div>
        </Top>
    )
}

const Top = styled.div`
    display: flex;
    position: fixed;
    top: 0;
    left: 0;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    height: 70px;
    background-color: #126BA5;
    padding: 0 18px;
    z-index: 50;
    box-shadow: 0px 4px 4px 0px #00000026;
    
    div {
        width: 51px;
        height: 51px;
        margin-right: 34px;

        img {
          width: 100%;
          height: 100%;
          border-radius: 98.5px;
        }
    }
`