import React from 'react';
import { connect } from 'react-redux';
import { DragSource } from 'react-dnd';
import CategoryIcon from './CategoryIcon'


const serviceSpec = {
  beginDrag(props) {
    console.log(props);
    return props.service;
  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    isDragging: monitor.isDragging()
  }
}

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
    const { isDraggin, connectDragSource, service } = this.props;
    return connectDragSource(
      <a className="panel-block is-active">
        <CategoryIcon category={service.category}/>
        {service.name} | ${service.price}
      </a>
    )
  }
}

const mapStateToProps = state => ({
  draggedService: state.draggedService
});


var reduxConnectedService = connect(mapStateToProps)(Service);
export default DragSource('service', serviceSpec, collect)(reduxConnectedService);
