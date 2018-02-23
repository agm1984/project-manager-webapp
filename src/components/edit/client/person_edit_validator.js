import validator from 'validator'

const editPersonValidatorSchema = (props) => {
  const {
    person_status,
    person_memberType,
    person_canBeEmailed,
    person_avatar,
    person_givenName,
    person_familyName,
    person_email,
    person_tel,
    // person_gender,
    // person_birthday,
    person_password,
    person_confirmPassword,
    person_location,
    person_bio,
  } = props
  const errors = {}

  // STATUS
  if (!person_status) errors.person_status = 'Status is required.'
  if ((person_status && validator.isEmpty(person_status)) || person_status === '0') {
    errors.person_status = 'Status is required.'
  }

  // MEMBER TYPE
  if (!person_memberType) errors.person_memberType = 'Member Type is required.'
  if ((person_memberType && validator.isEmpty(person_memberType)) || person_memberType === '0') {
    errors.person_memberType = 'Member Type is required.'
  }

  // CAN BE EMAILED?
  if (person_canBeEmailed && !validator.isBoolean(String(person_canBeEmailed))) {
    errors.person_canBeEmailed = 'Can Be Emailed must be true or false.'
  }

  // AVATAR URL
  if (person_avatar && !validator.isURL(person_avatar)) {
    errors.person_avatar = 'Avatar URL must be 8 or more characters.'
  }

  // FIRST NAME
  if (!person_givenName) errors.person_givenName = 'First Name is required.'
  if (person_givenName && !validator.isLength(person_givenName, { min: 2, max: 64 })) {
    errors.person_givenName = 'First Name is invalid.'
  }

  // LAST NAME
  if (!person_familyName) errors.person_familyName = 'Last Name is required.'
  if (person_familyName && !validator.isLength(person_familyName, { min: 2, max: 64 })) {
    errors.person_familyName = 'Last Name is invalid.'
  }

  // EMAIL
  if (!person_email) errors.person_email = 'Email is required.'
  if (person_email && !validator.isEmail(person_email)) {
    errors.person_email = 'Email Address is invalid.'
  }

  // TEL
  if (person_tel && !validator.isLength(person_tel, { min: 10, max: 10 })) {
    errors.person_tel = 'Phone must be 10 digits.'
  }
  const isNormalInteger = num => /^\+?(0|[1-9]\d*)$/.test(num) // rejects any number other than 0-9999999999
  if (person_tel && !isNormalInteger(person_tel)) {
    errors.person_tel = 'Phone must consist of only digits.'
  }
  if (person_tel && !validator.isMobilePhone(person_tel, 'en-CA')) {
    errors.person_tel = 'Phone is invalid.'
  }

  // GENDER
  // BIRTHDAY

  // PASSWORD
  // if (!person_password) errors.person_password = 'Password is required.'
  if (person_password && !validator.isLength(person_password, { min: 8, max: 256 })) {
    errors.person_password = 'Password must be 8 or more characters.'
  }

  // CONFIRM PASSWORD
  // if (!person_confirmPassword) errors.person_confirmPassword = 'Password must be confirmed.'
  if (person_password !== person_confirmPassword) {
    errors.person_confirmPassword = 'Passwords must match.'
  }

  // LOCATION
  if (!person_location) errors.person_location = 'Location is required.'

  // BIO
  if (person_bio && !validator.isLength(person_bio, { max: 2000 })) {
    errors.person_bio = 'About Description must be under 2000 characters.'
  }

  // console.log('ERRORS', errors)
  return errors
}

export default editPersonValidatorSchema
