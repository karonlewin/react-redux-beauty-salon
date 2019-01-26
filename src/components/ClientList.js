import React from 'react';
import ClientServices from './ClientServices';

class ClientList extends React.Component {
  render (){
    return (
      <div>
        <b>Clients:</b>
        {this.props.clientServices.map((clientService, index) => (
          <ClientServices client={clientService.client} services={clientService.services} key={clientService.id}/>
        ))}
      </div>
    )
  }
}

export default ClientList;
