import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import _ from 'lodash';

class CompanyTotal extends React.Component {
  render () {
    const clientsBillPaid = _.filter(this.props.clients, { billPaid: true })
    const allClients = this.props.clients

    let totalPaid = 0;
    
    clientsBillPaid.forEach(function (client) {
      totalPaid += _.reduce(client.services, function (sum, service) {
        return sum + (service ? service.price : 0);
      }, 0);
    })

    let total = 0

    allClients.forEach(function (client) {
      total += _.reduce(client.services, function (sum, service) {
        return sum + (service ? service.price : 0);
      }, 0);
    })

    return (
      <div>
        <nav className="level">
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Total</p>
                <p className="title has-text-danger">${total}</p>
            </div>
          </div>
          <div className="level-item has-text-centered">
            <div>
              <p className="heading">Total Paid</p>
                <p className="title has-text-primary">${totalPaid}</p>
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
