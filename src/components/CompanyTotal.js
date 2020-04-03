import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import _ from 'lodash';

class CompanyTotal extends React.Component {
  render () {
    const clientsBillPaid = _.filter(this.props.clients, { billPaid: true })
    const clientsBillNotPaid = _.filter(this.props.clients, { billPaid: false })

    let totalReceived = 0;
    
    clientsBillPaid.forEach(function (client) {
      totalReceived += _.reduce(client.services, function (sum, service) {
        return sum + (service ? service.price : 0);
      }, 0);
    })

    let totalOpen = 0

    clientsBillNotPaid.forEach(function (client) {
      totalOpen += _.reduce(client.services, function (sum, service) {
        return sum + (service ? service.price : 0);
      }, 0);
    })

    return (
      <div>
        <nav className="level">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Total Open</p>
              <p className="title has-text-danger">${totalOpen}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Total Received</p>
                <p className="title has-text-primary">${totalReceived}</p>
            </div>
          </div>
        </nav>
      </div>
    )
  }
}

CompanyTotal.propTypes = {
  clients: PropTypes.array
}

const mapStateToProps = store => ({
  clients: store.clientsState.clients,
})

export default connect(mapStateToProps)(CompanyTotal)
