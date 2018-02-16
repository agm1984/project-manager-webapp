import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Register.css'

const RegSignInLink = () => (
  <div id="reg_backLink-container">
    <NavLink
      to="/signin"
      id="reg_backLink"
    >
      Back to Sign In
    </NavLink>
  </div>
)

export default RegSignInLink
