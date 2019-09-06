import React from 'react'
import './Notification.css'

const Notification = ({ successMsg, errorMsg }) => {
  if (successMsg) {
    return (
      <div className="success">
        {successMsg}
      </div>
    )
  }
  if (errorMsg) {
    return (
    <div className="error">
      {errorMsg}
    </div>
    )
  }
  return '';
}

export default Notification