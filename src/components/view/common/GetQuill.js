import React from 'react'
import PropTypes from 'prop-types'
import ReactQuill from 'react-quill'

const GetQuill = (props) => {
  const { content } = props
  const modules = {
    toolbar: [],
  }
  return (
    <div className="view_row">
      <ReactQuill
        style={{ marginTop: '0.8rem', width: '100%', height: '100%' }}
        theme="bubble"
        modules={modules}
        defaultValue={content}
        readOnly
      />
    </div>
  )
}

GetQuill.propTypes = {
  content: PropTypes.string.isRequired,
}

export default GetQuill
