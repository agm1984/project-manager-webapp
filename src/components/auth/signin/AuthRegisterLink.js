import React from 'react'
import { NavLink } from 'react-router-dom'
import './Signin.css'

const AuthRegisterLink = () => (
  <div id="signin_registerLink-container">
    <NavLink
      to="/register"
      className="signin_registerLink animated flash"
    >
      Sign Up
    </NavLink>
  </div>
)

export default AuthRegisterLink
