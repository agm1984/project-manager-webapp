import React from 'react'

/**
 * This 404 Component is displayed when a URL does not
 * match with a corresponding page.
 */
const NotFoundPage = () => (
  <div className="page_container">
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div style={{ fontSize: '6rem' }}>
        404
      </div>
      <div style={{ fontSize: '3rem' }}>
        PAGE NOT FOUND
      </div>
    </div>
  </div>
)

export default NotFoundPage
