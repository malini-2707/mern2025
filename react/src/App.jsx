import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Navbar from './component/Navbar'
import Home from './page/Home'
import About from './page/About'
import Skills from './page/Skills'
import Contact from './page/Contact'
import Login from './component/Login'
import Counter from './component/Counter'
import Hook from './page/Hook'
import State from './Hooks/State'
import Effect from './Hooks/Effect'
import Effect2 from './Hooks/Effect2'
import {Routes,Route} from 'react-router-dom'
const App = () => {
  const [count, setCount] = useState(0)

  const fruits = ["Apple", "Orange", "Mango", "Guava"]
  const users = { username: "Malini", password: "1927" }

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home items={fruits} users={users}/>}/>
        <Route path='/about' element={<About />}/>
        <Route path='/skills' element={<Skills />}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/counter' element={<Counter />}/>
        <Route path='/hook' element={<Hook />}/>
        <Route path='/state' element={<State />}/>
        <Route path='/effect' element={<Effect />}/>
        <Route path='/effect2' element={<Effect2 />}/>
        <Route path='/login' element={<Login />}/>
      </Routes>

      <h1>Hello! Malini</h1>
      <div>How are you?</div>
    </div>
  )
}

export default App
