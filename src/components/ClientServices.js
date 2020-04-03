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
                    <a className="panel-block is-active" key={key}>
                      <Service service={clientServices[key]} />
                      <p className="delete" onClick={() => this.removeClientService(this.props.clientId, key)}></p>
                    </a>
                  ))
                }
              </nav>

            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <a className="level-item" aria-label="reply" onClick={() => this.removeClient(this.props.clientId)}>
                  <span className="icon is-small has-text-danger">
                    <i className="fas fa-ban" aria-hidden="true"></i>
                  </span>
                </a>
                <a className="level-item" aria-label="like" onClick={() => this.openPaymentModal()}>
                  <span className="icon is-small has-text-danger">
                    <i className="fas fa-dollar-sign" aria-hidden="true"></i>
                  </span>
                </a>
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
