import React from 'react'
import Client from './Client'
import Service from './Service'
import ClientTotal from './ClientTotal'
import { DropTarget } from 'react-dnd'
import { connect } from 'react-redux'
import { actionRemoveClientService } from '../actions/actionCreators'

const clientServicesSpec = {
  drop(props, monitor, component) {
    return props.client
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
    console.warn(clientServiceId)
    this.props.actionRemoveClientService(clientId, clientServiceId);
  }

  render() {
    const { connectDropTarget, hovered, service, dropService } = this.props
    return connectDropTarget(
      <div className="box">
        <article className="media">
          <div className="media-content">
            <div className="content">
              <Client client={this.props.client} />
              <b>Services:</b>
              <br />
              {this.props.client.services.map((service, index) => (
                <>
                  <div class="columns is-gapless">
                    <div class="column is-11">
                      <Service service={service} key={this.props.client.name + service.name} />
                    </div>
                    <div class="column is-1">
                      <button className="button is-danger" onClick={() => this.removeClientService(this.props.client.id, service.clientServiceId)}>
                        <span className="icon is-small">
                          <i className="fas fa-trash"></i>
                        </span>
                      </button>
                    </div>
                  </div>
                </>

              ))}
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <a className="level-item" aria-label="reply">
                  <span className="icon is-small has-text-danger">
                    <i className="fas fa-ban" aria-hidden="true"></i>
                  </span>
                </a>
                <a className="level-item" aria-label="like">
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
  actionRemoveClientService: (clientId, clientServiceId) => { dispatch(actionRemoveClientService(clientId, clientServiceId)) }
})

const mapStateToProps = (state) => ({
  clients: state.clients,
  draggedService: state.draggedService
})

const reduxConnectedClientServices = connect(mapStateToProps, mapDispatchToProps)(ClientServices)
export default DropTarget('service', clientServicesSpec, collect)(reduxConnectedClientServices)
