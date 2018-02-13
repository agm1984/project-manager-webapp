import validator from 'validator'

const authValidatorSchema = (props) => {
  const { person_email, person_password } = props
  const errors = {}

  // EMAIL
  if (!person_email) errors.person_email = 'Email is required.'
  if (person_email && !validator.isEmail(person_email)) {
    errors.person_email = 'Email is invalid.'
  }

  // PASSWORD
  if (!person_password) errors.person_password = 'Password is required.'
  if (person_password && !validator.isLength(person_password, { min: 8, max: 256 })) {
    errors.person_password = 'Password must be 8 or more characters.'
  }

  return errors
}

export default authValidatorSchema
