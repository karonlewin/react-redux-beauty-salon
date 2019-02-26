import React from 'react';
import { connect } from 'react-redux';
import { DragSource } from 'react-dnd';
import CategoryIcon from './CategoryIcon'
import { dragService } from '../actions/actionCreators'
import { dropService } from '../actions/actionCreators'


const serviceSpec = {
  beginDrag(props) {
    return props.service;
  },
  endDrag(props, monitor, component){
    let { dropService } = props;
    if (!monitor.didDrop()){
      return;
    }

    // console.log();
    console.log(props);
    console.log(monitor.getDropResult());
    props.dropService(props.service, monitor.getDropResult());
    // console.log(dropService());

  }
}

function collect(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
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
    this.props.dragService(service);
  }

  render (){
    const { isDragging, connectDragSource, service, dropService } = this.props;
    return connectDragSource(
      <a className="panel-block is-active">
        <CategoryIcon category={service.category}/>
        {service.name} | ${service.price}
      </a>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dragService: (service) => { dispatch(dragService(service)) },
  dropService: (service, clientTarget) => { dispatch(dropService(service, clientTarget)) }
});

const mapStateToProps = state => ({
  draggedService: state.draggedService
});


var reduxConnectedService = connect(mapStateToProps, mapDispatchToProps)(Service);
export default DragSource('service', serviceSpec, collect)(reduxConnectedService);
