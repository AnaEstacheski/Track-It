import GlobalStyle from '../assets/style/GlobalStyle'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './Login'
import Register from './Register'
import Habits from './Habits'
import Today from './Today'

export default function App() {
  return (
    <BrowserRouter>
        <GlobalStyle />
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/register' element={<Register />} />
            <Route path='/habits' element={<Habits />} />
            <Route path='/today' element={<Today />} />
        </Routes>
    </BrowserRouter>
    
  )
}
