import React from 'react';

class Service extends React.Component {
  render (){
    return (
      <a className="panel-block is-active" draggable onDrag={event => this.props.onDragService(event, this.props.service)}>
        <span className="panel-icon has-text-danger">
          <i className="fas fa-book" aria-hidden="true"></i>
        </span>
        {this.props.service.name} | ${this.props.service.price}
      </a>
    )
  }
}

export default Service;
