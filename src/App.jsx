import { Route, Routes } from 'react-router-dom'
import './App.css';
import Layout from '../src/Layouts/Layout'
import Auths from '../src/Layouts/Auths'
import Signup from '../src/Auth/Signup/Signup'
import Login from '../src/Auth/Login/Login'
import Home from '../src/Pages/Home/Home';
import About from '../src/Pages/About/About'



function App() {

  return (
   
  
    <Routes>
  <Route path="/auth" element={<Auths />}>
    <Route index element={<Login />} />
    <Route path="sign-up" element={<Signup />} />
  </Route>
  <Route element={<Layout />}>
    <Route path="/" element={<Home />} />
    <Route path="/about" element={<About />} />
  </Route>
</Routes> 
    
    
  )
}

export default App
