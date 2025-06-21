import React ,{useContext} from 'react'
import { Context } from '../Hooks/Context'
const Contact = () => {
    const user = useContext(Context)
  return (
    <>
    <div>{user.name}</div>
    <div>{user.phn}</div>
    </>
  )
}

export default Contact