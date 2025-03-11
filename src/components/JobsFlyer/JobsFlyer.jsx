import React from 'react'
import { NavLink } from 'react-router-dom';
export default function JobsFlyer() {
  return (
    <div className="flyer" style={{ width: '100%', padding: '5px' }}>
      <h1>Good or Bad Credit, We Can Help!</h1>
      <h1>You can qualify for upto Ksh 100,000 instant loan to MPESA.</h1>
      <NavLink className="btn" to={"/apply"} title='apply'>APPLY NOW</NavLink>
    </div>
  )
}
