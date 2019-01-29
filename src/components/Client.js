import React from 'react';

class Client extends React.Component {
  render (){
    return (
      <div className="client" onDrop={event => this.props.onDropService(event, this.props.client)} onDragOver={event => this.props.onDragOver(event)}>
        {this.props.client.name}
      </div>
    )
  }
}

export default Client;
