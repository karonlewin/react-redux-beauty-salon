import React from 'react';
import Client from './Client';
import Service from './Service';
import ClientTotal from './ClientTotal'

class ClientServices extends React.Component {
  render (){
    return (
      <div className="box" onDrop={event => this.props.onDropService(event, this.props.client)} onDragOver={event => this.props.onDragOver(event)}>
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

export default ClientServices;
