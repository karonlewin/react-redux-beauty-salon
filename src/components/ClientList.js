import React from 'react'
import PropTypes from 'prop-types'
import ClientServices from './ClientServices'
import { connect } from 'react-redux'

class ClientList extends React.Component {
  render () {
    const clients = this.props.clients

    return (
      <React.Fragment>
        {
          Object.keys(clients).map(key => (
            <ClientServices client={clients[key]} clientId={key} key={Math.random()} />
          ))
        }
      </React.Fragment>

    )
  }
}

ClientList.propTypes = {
  clients: PropTypes.object
}

const mapStateToProps = store => ({
  clients: store.clientsState.clients,
})

export default connect(mapStateToProps)(ClientList)
