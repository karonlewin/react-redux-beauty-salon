import React from 'react';
import { connect } from 'react-redux';

class Service extends React.Component {
  onDragService = (event, service) => {
    event.preventDefault();
    // Preventing repeated dispatchs
    if (service === this.props.draggedService){
      return false;
    }
    this.props.dispatch({type: 'DRAG_SERVICE', service: service})
  }

  render (){
    return (
      <a className="panel-block is-active" draggable onDrag={event => this.onDragService(event, this.props.service)}>
        <span className="panel-icon has-text-danger">
          <i className="fas fa-book" aria-hidden="true"></i>
        </span>
        {this.props.service.name} | ${this.props.service.price}
      </a>
    )
  }
}

const mapStateToProps = state => ({
  draggedService: state.draggedService
});

export default connect(mapStateToProps)(Service);
