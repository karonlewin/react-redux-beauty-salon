import React from 'react'
import PropTypes from 'prop-types'

class ClientTotal extends React.Component {
  render () {
    let total = 0
    const services = this.props.services

    Object.keys(services).map(key => (
      total = total + services[key].price
    ))

    return (
      <div>
        <b>
          ${total}
        </b>
      </div>
    )
  }
}

ClientTotal.propTypes = {
  services: PropTypes.object
}

export default ClientTotal
