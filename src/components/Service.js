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
    props.dropService(props.service, monitor.getDropResult());
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

var dragSource = DragSource('service', serviceSpec, collect)(Service);
export default connect(mapStateToProps, mapDispatchToProps)(dragSource);
