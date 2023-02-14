import React from 'react'

const Login = () => {

    fetch('https://dummyjson.com/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          
          username: 'kminchelle',
          password: '0lelplR',
        })
      })
      .then(res => res.json())
      .then(console.log);

  return (
    <div>Welcome to Login</div>
  )
}

export default Login