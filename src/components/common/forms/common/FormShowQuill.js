import React from 'react'
import PropTypes from 'prop-types'
import ReactQuill from 'react-quill'
import './Form.css'

const FormShowQuill = (props) => {
  const { content } = props
  const modules = {
    toolbar: [],
  }
  return (
    <div className="form_row">
      <ReactQuill
        style={{
          margin: '0 16px 0 16px',
          width: '100%',
          height: '100%',
          backgroundColor: '#fff',
        }}
        theme="bubble"
        modules={modules}
        defaultValue={content}
        readOnly
      />
    </div>
  )
}

FormShowQuill.propTypes = {
  content: PropTypes.string.isRequired,
}

export default FormShowQuill
