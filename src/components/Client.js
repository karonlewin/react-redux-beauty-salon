import React from 'react'

class Client extends React.Component {
  render () {
    const client = this.props.client

    return (
      <div className="client" >
        <p>
          <strong>{client.name}</strong> <small>@{client.name.trim().toLowerCase()}</small>
          <br/><small>{client.registered_at.toLocaleTimeString()}</small>
        </p>
      </div>
    )
  }
}

export default Client
