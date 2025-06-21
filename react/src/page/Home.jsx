import React from 'react'
import About from './About'
import image from '../assets/image.jpg'
const Home = ({items,users}) => {
  return (
    <div>
      <About items={items} users={users}/>
      <img src={image} alt="react"/>
    </div>
  )
}

export default Home