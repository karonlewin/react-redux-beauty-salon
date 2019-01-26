import React from 'react';

class Service extends React.Component {
  render (){
    return (
      <div>
        {this.props.service.name} | ${this.props.service.price}
      </div>
    )
  }
}

export default Service;
