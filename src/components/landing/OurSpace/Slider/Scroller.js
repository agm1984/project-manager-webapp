// import React, { Component } from 'react'
// import ReactDOM from 'react-dom'

// /**
//  * Debounce Function
//  * @param {Function} func Function that requires throttling
//  * @param {Number} wait Wait time in milliseconds between invocations
//  */
// const debounce = (func, wait) => {
//   let timeout
//   return (...args) => {
//     clearTimeout(timeout)
//     timeout = setTimeout(() => func.apply(this, args), wait)
//   }
// }

// class Scroller extends Component {
//   constructor(props) {
//     super(props)
//     this.state = {}
//     this._scroller = null
//     this.startX = null
//   }

//   onMouseDown = (event) => {
//     window.addEventListener('mousemove', this.onMouseMove)
//     window.addEventListener('mouseup', this.onMouseUp)
//     this.startX = event.clientX
//   }

//   onMouseMove = (event) => {
//     console.log('CURRENT', event.clientX)
//     console.log('START', this.startX)
//     const distance = event.clientX - this.startX
//     if (distance > 0) {
//       console.log('SCROLLING RIGHT')
//     }
//     if (distance < 0) {
//       console.log('SCROLLING LEFT')
//     }
//   }

//   onMouseUp = () => {
//     window.removeEventListener('mousemove', this.onMouseMove)
//     window.removeEventListener('mouseup', this.onMouseUp)
//   }

//   attachScroller = (scroller) => {
//     this._scroller = ReactDOM.findDOMNode(scroller)
//   }

//   render() {
//     return (
//       <div className="scroller-wrapper">
//         <div
//           tabIndex={0}
//           role="button"
//           ref={this.attachScroller}
//           className="scroller"
//           onMouseDown={this.onMouseDown}
//           onMouseMove={this.MouseMove}
//           onMouseUp={this.onMouseUp}
//           onScroll={this.onMouseMove}
//         >
//           <div className="scroller_child" />
//           <div className="scroller_child" />
//           <div className="scroller_child" />
//           <div className="scroller_child" />
//           <div className="scroller_child" />
//           <div className="scroller_child" />
//           <div className="scroller_child" />
//           <div className="scroller_child" />
//           <div className="scroller_child" />
//           <div className="scroller_child" />
//           <div className="scroller_child" />
//           <div className="scroller_child" />
//           <div className="scroller_child" />
//           <div className="scroller_child" />
//           <div className="scroller_child" />
//           <div className="scroller_child" />
//           <div className="scroller_child" />
//         </div>
//       </div>
//     )
//   }
// }

// export default Scroller
