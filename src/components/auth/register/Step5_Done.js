import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RegSection from './common/RegSection'
import { handleFirstTimeSignIn } from './reg_actions'
import './Register.css'

// auth_done should be reg_done
// font-size: 1.6rem;
const Done = props => (
  <div id="reg_wrapper">
    <div id="reg_container">
      <RegSection heading="SUCCESS">
        <p className="auth_done">You are now registered.</p>
        <p className="auth_done">Press <strong>DONE</strong> to navigate to the Admin Area.</p>
        <div id="reg_button-container">
          <button
            id="reg_button"
            onClick={() => props.handleFirstTimeSignIn()}
          >
            DONE
          </button>
        </div>
      </RegSection>
    </div>
  </div>
)

Done.propTypes = {
  handleFirstTimeSignIn: PropTypes.func.isRequired,
}

export default connect(null, { handleFirstTimeSignIn })(Done)
