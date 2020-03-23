import React from 'react'

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

export default ClientTotal
