import React, { useContext } from 'react'
import { FirstName,LastName } from '../App'

const Compo4 = () => {
    const abc=useContext(FirstName)
    const last=useContext(LastName)
  return (
    <h1>THIS IS CHILD FOUR {abc} {last} </h1>
  )
}

export default Compo4
