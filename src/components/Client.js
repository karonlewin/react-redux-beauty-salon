import React from 'react'
import PropTypes from 'prop-types'
import Moment from 'react-moment';

class Client extends React.Component {
  render () {
    const client = this.props.client

    return (
      <div className="client" >
        <p>
          <strong>{client.name}</strong> <small>@{client.name.trim().toLowerCase()}</small>
          <br/>
          <small>
            <Moment format="H:mm:ss">{client.registeredAt}</Moment>
          </small>
        </p>
      </div>
    )
  }
}

Client.propTypes = {
  client: PropTypes.shape({
    name: PropTypes.string,
    registeredAt: PropTypes.number
  })
}

export default Client
