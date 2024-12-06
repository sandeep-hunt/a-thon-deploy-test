import React from 'react'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <React.Fragment>
        <div className="top-banner">
            <Link to="https://forms.gle/wzXVbKaDTEw9LNCe7" target='_blank'>Register For Booking</Link>
        </div>
    </React.Fragment>
  )
}

export default Banner