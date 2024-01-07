import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom'
import Login from './pages/login'
import LoginAgain from './pages/login-again'
import Success from './pages/success'
import Confirm from './pages/confirm'



export default function Router() {
  return (
    <BrowserRouter>
        <Routes>
        <Route path="/" element={<Navigate to={"/login"} />} />
            <Route path='/login' element={<Login/>}/>
            <Route path='/login/error' element={<LoginAgain/>}/>
            <Route path='/login/confirm' element={<Confirm/>}/>
            <Route path='/success' element={<Success/>}/>
            
        </Routes>
    </BrowserRouter>
  )
}