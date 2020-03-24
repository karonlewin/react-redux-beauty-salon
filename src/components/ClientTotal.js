import React from 'react'
import PropTypes from 'prop-types'

class ClientTotal extends React.Component {
  render () {
    const total = this.props.services.reduce((total, service) => {
      return total + service.price
    }, 0)

    return (
      <div>
        <b>
          Total: ${total}
        </b>
      </div>
    )
  }
}

ClientTotal.propTypes = {
  services: PropTypes.array
}

export default ClientTotal
