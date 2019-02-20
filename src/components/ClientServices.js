import React from 'react';
import Client from './Client';
import Service from './Service';
import ClientTotal from './ClientTotal'
import { DropTarget } from 'react-dnd';
import { connect } from 'react-redux';


const clientServicesSpec = {
  drop(props, monitor, component) {
    if (monitor.didDrop()) {
      return;
    }

    // Obtain the dragged item
    const item = monitor.getItem();
    console.log(item);
    console.log(props);
    props.dispatch({type: 'DROP_SERVICE', service: item, clientTarget: props.client})

    return { };
  }
}

function collect(connect, monitor){
  return {
    connectDropTarget: connect.dropTarget(),
    hovered: monitor.isOver()
  }
}

class ClientServices extends React.Component {
  onDropService = (event, clientTarget) => {
    this.props.dispatch({type: 'DROP_SERVICE', service: this.props.draggedService, clientTarget: clientTarget})
  }

  render (){
    const { connectDropTarget, hovered, service } = this.props;
    return connectDropTarget(
      <div className="box">
        <article className="media">
          <div className="media-left">
            <figure className="image is-64x64">
              <img src="https://bulma.io/images/placeholders/128x128.png" alt="Image"/>
            </figure>
          </div>
          <div className="media-content">
            <div className="content">
              <Client client={this.props.client}/>
              <b>Services:</b>
              <br/>
              {this.props.client.services.map((service, index) => (
                <Service service={service}/>
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

const mapStateToProps = state => ({
  clients: state.clients,
  draggedService: state.draggedService
});

var reduxConnectedClientServices = connect(mapStateToProps)(ClientServices);
export default DropTarget('service', clientServicesSpec, collect)(reduxConnectedClientServices);
