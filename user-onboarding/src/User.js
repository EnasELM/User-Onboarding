import React from 'react'

function User({ details }) {
  if (!details) {
    return <h3>Working fetching your friend&apos;s details...</h3>
  }

  return (
    <div >
      <h2>{details.username}</h2>
      <p>Email: {details.email}</p>
      <p>Role: {details.password}</p>
      <p>Agree: {details.agree}</p>

      
    </div>
  )
}

export default User
