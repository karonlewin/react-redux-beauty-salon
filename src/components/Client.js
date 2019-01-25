import React from 'react';

class Client extends React.Component {
  render (){
    return (
      <div>
        {this.props.client.name}
      </div>
    )
  }
}

export default Client;
