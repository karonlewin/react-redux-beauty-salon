import React from 'react';
import Client from './Client';
import Service from './Service';
import ClientTotal from './ClientTotal'
import { dropService } from '../actions/actionCreators'
import { connect } from 'react-redux';

class ClientServices extends React.Component {
  onDropService = (event, clientTarget) => {
    this.props.dropService(this.props.draggedService, clientTarget);
  }

  render (){
    return (
      <div className="box" onDrop={event => this.onDropService(event, this.props.client)} onDragOver={event => event.preventDefault()}>
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
                <Service service={service} onDragService={(event) => event.preventDefault()}/>
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
  dropService: (service, clientTarget) => { dispatch(dropService(service, clientTarget)) }
});

const mapStateToProps = state => ({
  clients: state.clients,
  draggedService: state.draggedService
});

export default connect(mapStateToProps, mapDispatchToProps)(ClientServices);
