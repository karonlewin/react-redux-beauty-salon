import React from 'react';

class Service extends React.Component {
  render (){
    return (
      <div>
        {this.props.service.name}
      </div>
    )
  }
}

export default Service;
