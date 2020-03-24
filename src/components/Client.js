import React from 'react'
import PropTypes from 'prop-types'

class Client extends React.Component {
  render () {
    const client = this.props.client

    return (
      <div className="client" >
        <p>
          <strong>{client.name}</strong> <small>@{client.name.trim().toLowerCase()}</small>
          <br/><small>{client.registeredAt.toLocaleTimeString()}</small>
        </p>
      </div>
    )
  }
}

Client.propTypes = {
  client: PropTypes.shape({
    name: PropTypes.string,
    registeredAt: PropTypes.instanceOf(Date)
  })
}

export default Client
