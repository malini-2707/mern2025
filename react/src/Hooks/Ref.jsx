import React, { useEffect, useRef, useState } from 'react'

const Ref = () => {
const [count,setCount] = useState(0);
const [value,setValue] = useState(0);
// const handleIncrement = () =>{
//     setCount(count+1)
// }
// const handleValueIncrement = () =>{
//     value.current=value.current+1
// }
useEffect(() => {
    setTimeout(() =>{
        value.current=value.current+1
    },2000)
})
  return (
    <div>
        <h1>{count}</h1>
        <button onClick={()=>setCount(count+1)}>+</button>
        <h1>{value.current}</h1>
    </div>
  )
}

export default Ref