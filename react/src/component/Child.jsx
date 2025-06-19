import React from 'react'

const Child = ({name,phnno,dept}) => {
  return (
    <div>
      <h1>Name: {name}</h1>
      <h1>Phone no: {phnno}</h1>
      <h1>Department: {dept}</h1>
    </div>
  )
}

export default Child