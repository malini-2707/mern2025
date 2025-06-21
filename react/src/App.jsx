import Child from './component/Child'
import Home from './page/Home'
import About from './page/About'
import Skills from './page/Skills'
import Contact from './page/Contact'
import Login from './component/Login';
import Counter from "./component/Counter"
import Navbar from './component/Navbar'
import Hook from './page/Hook'
import State from './Hooks/State'
import Effect from './Hooks/Effect'
import Effect2 from './Hooks/Effect2'
import Ref from './Hooks/Ref'
import Reducer from './Hooks/Reducer'
import {Routes,Route} from 'react-router-dom'
const App = () => {
  var fruits = ["Apple","Orange","Mango","Guava"];
  var users = {username:"Malini",password:"1927"};
  return (
    <div>
{/* <Child name='Malini' phnno='9876543210' dept='IT'/>
    <Child name='Maluu' phnno='1234567890' dept='EIE'/>
    <Home items={fruits} users={users}/>
    <About />
   <Skills />
<Contact />
   <Login />
      <Counter /> */}
    
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
        <Route path='/ref' element={<Ref />}/>
        <Route path='/reducer' element={<Reducer />}/>
      </Routes>
    </div>
  )
}

export default App
