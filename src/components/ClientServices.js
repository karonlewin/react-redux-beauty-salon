import React from 'react';
import Client from './Client';
import Service from './Service';
import ClientTotal from './ClientTotal'
import { DropTarget } from 'react-dnd';
import { dropService } from '../actions/actionCreators'
import { connect } from 'react-redux';


const clientServicesSpec = {
  drop(props, monitor, component) {
    return props.client;
  }
}

function collect(connect, monitor){
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver()
  }
}

class ClientServices extends React.Component {
  render (){
    const { connectDropTarget, hovered, service, dropService } = this.props;
    return connectDropTarget(
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt=""/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <Client client={this.props.client}/>
              <b>Services:</b>
              <br/>
              {this.props.client.services.map((service, index) => (
                <Service service={service} key={this.props.client.name + service.name}/>
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
                <ClientTotal services={this.props.client.services}/>
              </div>
            </nav>

          </div>
        </article>
      </div>

    )
  }
}

const mapDispatchToProps = (dispatch) => ({
});

const mapStateToProps = state => ({
  clients: state.clients,
  draggedService: state.draggedService
});

var reduxConnectedClientServices = connect(mapStateToProps, mapDispatchToProps)(ClientServices);
export default DropTarget('service', clientServicesSpec, collect)(reduxConnectedClientServices);
