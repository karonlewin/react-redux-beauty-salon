import React from 'react'
import PropTypes from 'prop-types'
import ClientServices from './ClientServices'
import { connect } from 'react-redux'

class ClientList extends React.Component {
  render () {
    function sortClients (a, b) {
      const nameA = a.name.toUpperCase()
      const nameB = b.name.toUpperCase()

      let comparison = 0
      if (nameA > nameB) {
        comparison = 1
      } else if (nameA < nameB) {
        comparison = -1
      }
      return comparison
    }

    return (
      <React.Fragment>
        {this.props.clients.sort(sortClients).map(client => (
          <ClientServices client={client} key={client.name + client.registeredAt.getTime()}/>
        ))}
      </React.Fragment>

    )
  }
}

ClientList.propTypes = {
  clients: PropTypes.array
}

const mapStateToProps = store => ({
  clients: store.clientsState.clients
})

export default connect(mapStateToProps)(ClientList)
