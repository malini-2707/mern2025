import React from 'react'
import {Link} from 'react-router-dom'
const Hook = () => {
  return (
    <div style={{display:"flex",flexDirection:"column"}}>
        <Link to='/State'>useState</Link>
        <Link to='/Effect'>useEffect</Link>
        <Link to='/Effect2'>useEffect</Link>
    </div>
  )
}

export default Hook