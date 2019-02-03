import React from 'react';

class Client extends React.Component {
  render (){
    return (
      <div className="client" >
        <p>
          <strong>{this.props.client.name}</strong> <small>@{this.props.client.name.trim().toLowerCase()}</small>
          <br/><small>{this.props.client.registered_at.toLocaleTimeString()}</small>
        </p>
      </div>
    )
  }
}

export default Client;
