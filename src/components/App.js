import GlobalStyle from '../assets/style/GlobalStyle'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Login from './Login'
import Habits from './Habits'

export default function App() {
  return (
    <BrowserRouter>
        <GlobalStyle />
        <Routes>
            <Route path='/' element={<Login />} />
            <Route path='/habits' element={<Habits />} />
        </Routes>
    </BrowserRouter>
    
  )
}
