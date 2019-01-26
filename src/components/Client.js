import React from 'react';

class Client extends React.Component {
  render (){
    return (
      <div>
        <b>
          {this.props.client}
        </b>
      </div>
    )
  }
}

export default Client;
