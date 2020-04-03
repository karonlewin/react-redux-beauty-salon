import React from 'react';
import PropTypes from 'prop-types';
import ClientServices from './ClientServices';
import { connect } from 'react-redux';
import _ from 'lodash';

class ClientList extends React.Component {
  render () {
    const clients = _.filter(this.props.clients, { billPaid: false })

    return (
      <React.Fragment>
        {
          clients.map(client => (
            <ClientServices client={client} clientId={client.id} key={client.id} />
          ))
        }
      </React.Fragment>

    )
  }
}

ClientList.propTypes = {
  clients: PropTypes.array
}

const mapStateToProps = store => ({
  clients: store.clientsState.clients,
})

export default connect(mapStateToProps)(ClientList)
