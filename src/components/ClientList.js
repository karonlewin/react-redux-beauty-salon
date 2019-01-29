import React from 'react';
import ClientServices from './ClientServices';

class ClientList extends React.Component {
  render (){
    return (
      <div>
        <b>Clients:</b>
        {this.props.clients.map((client, index) => (
          <ClientServices client={client} onDragOver={this.props.onDragOver} onDropService={this.props.onDropService}/>
        ))}
      </div>
    )
  }
}

export default ClientList;
