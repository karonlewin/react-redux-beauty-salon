import React from 'react';
import { connect } from 'react-redux';
import CategoryIcon from './CategoryIcon'

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
        <CategoryIcon category={this.props.service.category}/>
        {this.props.service.name} | ${this.props.service.price}
      </a>
    )
  }
}

const mapStateToProps = state => ({
  draggedService: state.draggedService
});

export default connect(mapStateToProps)(Service);
