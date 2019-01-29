import React from 'react';
import Client from './Client';
import Service from './Service';
import ClientTotal from './ClientTotal'

class ClientServices extends React.Component {
  render (){
    return (
      <div className="clientService">
        <Client client={this.props.client} onDragOver={this.props.onDragOver} onDropService={this.props.onDropService}/>
        {this.props.client.services.map((service, index) => (
          <Service service={service}/>
        ))}
        <ClientTotal services={this.props.client.services}/>
      </div>
    )
  }
}

export default ClientServices;
