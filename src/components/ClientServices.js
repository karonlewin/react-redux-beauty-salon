import React from 'react'
import Client from './Client'
import Service from './Service'
import ClientTotal from './ClientTotal'
import { DropTarget } from 'react-dnd'
import { connect } from 'react-redux'

import {
  actionRemoveClientService,
  actionRemoveClient,
  actionOpenPaymentModal,
} from '../actions/actionCreators'

const clientServicesSpec = {
  drop(props) {
    // Returns the object to be used in endDrag(props, monitor) on Service.js
    // This object will be available on monitor.getDropResult() inside endDrag(props, monitor)
    // and will contain the clientId value
    return props
  }
}

function collect(connect, monitor) {
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver()
  }
}

class ClientServices extends React.Component {
  removeClientService = (clientId, clientServiceId) => {
    this.props.actionRemoveClientService(clientId, clientServiceId);
  }

  removeClient = (clientId) => {
    const confirmed = window.confirm("Are you sure?")

    if (confirmed) {
      this.props.actionRemoveClient(clientId)
    }
  }

  openPaymentModal = () => {
    this.props.actionOpenPaymentModal(this.props.client)
  }

  render() {

    const { connectDropTarget } = this.props
    const clientServices = this.props.client.services

    return connectDropTarget(
      <div className="box">
        <article className="media">
          <div className="media-content">
            <div className="content">
              <Client client={this.props.client} />
              <br />
              <span className="has-text-weight-bold">
                Services:
              </span>
              <nav>
                {
                  Object.keys(clientServices).map(key => (
                    <div className="panel-block is-active" key={key}>
                      <Service service={clientServices[key]} />
                      <p className="delete" onClick={() => this.removeClientService(this.props.clientId, key)}></p>
                    </div>
                  ))
                }
              </nav>

            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <p className="buttons">
                  <button className="button is-danger is-small" onClick={() => this.removeClient(this.props.clientId)}>
                    <span className="icon is-small">
                      <i className="fas fa-ban"></i>
                    </span>
                    <span>Remove</span>
                  </button>

                  <button className="button is-primary is-small" onClick={() => this.openPaymentModal()}>
                    <span className="icon is-small">
                      <i className="fas fa-dollar-sign"></i>
                    </span>
                    <span>Cashier</span>
                  </button>
                </p>
              </div>
              <div className="level-right">
                <ClientTotal services={this.props.client.services} />
              </div>
            </nav>
          </div>
        </article>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actionRemoveClientService: (clientId, clientServiceId) => { dispatch(actionRemoveClientService(clientId, clientServiceId)) },
  actionRemoveClient: (clientId) => { dispatch(actionRemoveClient(clientId)) },
  actionOpenPaymentModal: (client) => { dispatch(actionOpenPaymentModal(client)) },
})

const mapStateToProps = (state) => ({
})

const reduxConnectedClientServices = connect(mapStateToProps, mapDispatchToProps)(ClientServices)
export default DropTarget('service', clientServicesSpec, collect)(reduxConnectedClientServices)
