import React from 'react'
import PropTypes from 'prop-types'


export default function Ticket(param) {
  return (
    <div>
      <h1>{param.title}</h1>
      <p>{param.desc}</p>
    </div>
  )
}

Ticket.propTypes = {
    title:PropTypes.string.isRequired,
    desc:PropTypes.string
}

Ticket.defaultProps = {
    title:"N/A",
    desc:"N/A"
}