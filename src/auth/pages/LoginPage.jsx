import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { AuthContext } from '../context'

export const LoginPage = () => {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()
  const onLogin = () => {
    login('Leandro Ravetto')
    navigate('/', {
      replace: true
    })
  }
  return (
    <div className="container mt-5">
      <h1>LoginPage</h1>
      <hr />
      <button onClick={ onLogin } className='btn btn-primary'>login</button>
    </div>
  )
}
