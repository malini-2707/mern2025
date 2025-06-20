import React, { useEffect, useState } from 'react'

const Effect2 = () => {
    const [user,setUser]=useState([])
    useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/users')
      .then((res)=>(res.json()))
      .then((data)=>setUser(data))
    })

  return (
    <div>
<ol>
  {user.map((data)=>(
    <>
    <p>{data.id}</p>
    <p>{data.name}</p>
    <p>{data.email}</p>
    <p>{data.address.geo.lat}</p>
    </>
    ))}
</ol>
    </div>
  )
}

export default Effect2
