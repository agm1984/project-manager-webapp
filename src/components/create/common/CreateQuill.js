import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactQuill from 'react-quill'

class CreateQuill extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modules: { /* eslint-disable no-multi-spaces */
        toolbar: [                                        // These appear in order as declared
          ['bold', 'italic', 'underline', 'strike'],      // toggled buttons
          ['blockquote', 'code-block'],                   //
          [{ header: 1 }, { header: 2 }],                 // custom button values
          [{ list: 'ordered' }, { list: 'bullet' }],      //
          [{ script: 'sub' }, { script: 'super' }],       // superscript/subscript
          [{ indent: '-1' }, { indent: '+1' }],           // outdent/indent
          [{ direction: 'rtl' }],                         // text direction
          [{ size: ['small', false, 'large', 'huge'] }],  // custom dropdown
          [{ header: [1, 2, 3, 4, 5, 6, false] }],        //
          ['link', 'image', 'video', 'formula'],          // adds image support
          [{ color: [] }, { background: [] }],            // dropdown with defaults from theme
          [{ font: [] }],                                 //
          [{ align: [] }],                                //
          ['clean'],                                      // remove formatting button
        ], /* eslint-enable no-multi-spaces */
      },
    }
    this.handleChange = this.handleChange.bind(this)
    this.quillRef = null
    this.reactQuillRef = null
  }
  /**
   * When the component mounts, the Quill Editor DOM node should be loaded
   * as a ref and stored as a local instance variable.
   */
  componentDidMount() {
    this.attachQuillRefs()
  }

  /**
   * Every re-render, the ref should be updated.
   */
  componentDidUpdate() {
    this.attachQuillRefs()
  }

  /**
   * When the Quill Editor is mounted, a reference to its DOM Node is created
   * and maintained to capture the plain text version of the Content.
   */
  attachQuillRefs() {
    if (typeof this.reactQuillRef.getEditor !== 'function') {
      return null
    }
    this.quillRef = this.reactQuillRef.getEditor()
    return null
  }

  /**
   * When Quill Editor Content is updated, form state is updated.
   * @param {*} draft Updated Content from Quill Editor
   */
  handleChange(draft) {
    const article_plainText = this.quillRef.getText()
    this.props.input.onChange(draft)
    return this.props.providePlainText(article_plainText)
  }
  render() {
    const {
      input, name, placeholder, meta,
    } = this.props
    const { touched, error } = meta
    const maybeHasError = (touched && error) ? 'error' : ''
    return (
      <div className="edit_rowcontainer">
        <ReactQuill
          ref={(el) => {
            this.reactQuillRef = el
          }}
          className={maybeHasError}
          style={{ marginTop: '0.8rem' }}
          theme="snow"
          modules={this.state.modules}
          name={name}
          value={input.value}
          defaultValue=""
          placeholder={placeholder}
          onChange={draft => this.handleChange(draft)}
        />
        {touched && (error && <span className="edit_required">{error}</span>)}
      </div>
    )
  }
}

CreateQuill.defaultProps = {
  input: undefined,
  name: undefined,
  meta: undefined,
}
CreateQuill.propTypes = {
  input: PropTypes.shape({
    name: PropTypes.string,
    onBlur: PropTypes.func,
    onChange: PropTypes.func,
    onDragStart: PropTypes.func,
    onDrop: PropTypes.func,
    onFocus: PropTypes.func,
    value: PropTypes.any,
  }),
  name: PropTypes.string,
  placeholder: PropTypes.string.isRequired,
  meta: PropTypes.shape({
    touched: PropTypes.bool,
    error: PropTypes.string,
  }),
  providePlainText: PropTypes.func.isRequired,
}

export default CreateQuill
