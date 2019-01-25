import React from 'react';
import Client from './Client';

class ClientServices extends React.Component {
  render (){
    return (
      <Client client={this.props.client}/>
    )
  }
}

export default ClientServices;
