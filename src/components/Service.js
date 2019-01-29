import React from 'react';

class Service extends React.Component {
  render (){
    return (
      <div className="service" draggable onDrag={event => this.props.onDragService(event, this.props.service)}>
        {this.props.service.name} | ${this.props.service.price}
      </div>
    )
  }
}

export default Service;
