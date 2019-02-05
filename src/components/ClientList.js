import React from 'react';
import ClientServices from './ClientServices';

class ClientList extends React.Component {
  render (){
    return (
      <React.Fragment>
        {this.props.clients.map((client, index) => (
          <ClientServices client={client} onDragOver={this.props.onDragOver} onDropService={this.props.onDropService}/>
        ))}
      </React.Fragment>
      
    )
  }
}

export default ClientList;
