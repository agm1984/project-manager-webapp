import React from 'react'
import { NavLink } from 'react-router-dom'

const AuthRegisterLink = () => (
  <div className="auth_register">
    <NavLink
      to="/admin/register"
      className="animated auth_register-link flash"
      style={{ marginTop: '3.2rem' }}
    >
      Sign Up
    </NavLink>
  </div>
)

export default AuthRegisterLink
