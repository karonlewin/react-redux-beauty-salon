import React from 'react';
import Client from './Client';
import Service from './Service';

class ClientServices extends React.Component {
  render (){
    return (
      <div className="clientService">
        <Client client={this.props.client} onDragOver={this.props.onDragOver} onDropService={this.props.onDropService}/>
        {this.props.client.services.map((service, index) => (
          <Service service={service}/>
        ))}
        ${this.props.client.services.reduce((total, service) => total + service.price, 0)}
      </div>
    )
  }
}

export default ClientServices;
