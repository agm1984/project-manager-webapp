import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RegSection from './common/RegSection'
import Footer from '../../Footer'
import { handleFirstTimeSignIn } from './reg_actions'

const Done = props => (
  <div id="auth_wrapper">
    <div id="auth_container">
      <RegSection heading="SUCCESS">
        <p className="auth_done">You are now registered.</p>
        <p className="auth_done">Press <strong>DONE</strong> to navigate to the Admin Area.</p>
        <div className="auth_signin_button-container">
          <button
            className="auth_signin_button-button"
            onClick={() => props.handleFirstTimeSignIn()}
          >
            DONE
          </button>
        </div>
      </RegSection>
    </div>
    <Footer />
  </div>
)

Done.propTypes = {
  handleFirstTimeSignIn: PropTypes.func.isRequired,
}

export default connect(null, { handleFirstTimeSignIn })(Done)
