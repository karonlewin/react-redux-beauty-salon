import React from 'react';
import Client from './Client';
import Service from './Service';
import ClientTotal from './ClientTotal';

class ClientServices extends React.Component {
  render (){
    return (
      <div className="client-service">
        <Client client={this.props.client}/>
        {this.props.services.map((service, index) => (
          <Service service={service} key={service.id}/>
        ))}
        <ClientTotal services={this.props.services}/>
      </div>

    )
  }
}

export default ClientServices;
