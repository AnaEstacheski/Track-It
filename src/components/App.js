import GlobalStyle from '../assets/style/GlobalStyle'
import { useContext } from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { AuthContext } from "../providers/userData"
import { ProgressContext } from "../providers/userProgress"
import { HabitContext } from "../providers/userHabit"
import Login from './Login'
import Register from './Register'
import Habits from './Habits'
import Today from './Today'
import Historic from './Historic';

export default function App() {
  const { user, setUser } = useContext(AuthContext)
  const { progress, setProgress } = useContext(ProgressContext)
  const {hb, setHb} = useContext(HabitContext)
  
  return (
    <BrowserRouter>
        <GlobalStyle />
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/habits' element={<Habits />} />
            <Route path='/today' element={<Today />} />
            <Route path='/historic' element={<Historic />} />
        </Routes>
    </BrowserRouter>
    
  )
}
