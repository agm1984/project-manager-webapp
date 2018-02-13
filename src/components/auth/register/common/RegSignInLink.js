import React from 'react'
import { NavLink } from 'react-router-dom'

const RegSignInLink = () => (
  <div className="auth_register">
    <NavLink
      to="/admin/signin"
      className="auth_register-link"
      style={{ marginTop: '3.2rem' }}
    >
      Back to Sign In
    </NavLink>
  </div>
)

export default RegSignInLink
