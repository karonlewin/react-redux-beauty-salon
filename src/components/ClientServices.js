import React from 'react';
import Client from './Client';
import Service from './Service';
import ClientTotal from './ClientTotal'
import { connect } from 'react-redux';

class ClientServices extends React.Component {
  onDropService = (event, clientTarget) => {
    this.props.dispatch({type: 'DROP_SERVICE', service: this.props.draggedService, clientTarget: clientTarget})
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
              <ClientTotal services={this.props.client.services}/>
            </div>
            <nav className="level is-mobile">
              <div className="level-left">
                <a className="level-item" aria-label="reply">
                  <span className="icon is-small has-text-danger">
                    <i className="fas fa-reply" aria-hidden="true"></i>
                  </span>
                </a>
                <a className="level-item" aria-label="retweet">
                  <span className="icon is-small has-text-danger">
                    <i className="fas fa-retweet" aria-hidden="true"></i>
                  </span>
                </a>
                <a className="level-item" aria-label="like">
                  <span className="icon is-small has-text-danger">
                    <i className="fas fa-heart" aria-hidden="true"></i>
                  </span>
                </a>
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

export default connect(mapStateToProps)(ClientServices);
