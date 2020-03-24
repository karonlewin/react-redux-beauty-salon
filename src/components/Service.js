import React from 'react'
import { connect } from 'react-redux'
import { DragSource } from 'react-dnd'
import CategoryIcon from './CategoryIcon'
import { dragService, dropService } from '../actions/actionCreators'

const serviceSpec = {
  beginDrag (props) {
    return props.service
  },
  endDrag (props, monitor) {
    if (!monitor.didDrop()) {
      return
    }
    props.dropService(props.service, monitor.getDropResult())
  }
}

function collect (connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging()
  }
}

class Service extends React.Component {
  render () {
    const { connectDragSource, service } = this.props
    return connectDragSource(
      <a className="panel-block is-active">
        <CategoryIcon category={service.category}/>
        {service.name} | ${service.price}
      </a>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  dragService: (service) => {
    dispatch(dragService(service))
  },
  dropService: (service, clientTarget) => {
    dispatch(dropService(service, clientTarget))
  }
})

const mapStateToProps = (state) => ({
  draggedService: state.draggedService
})

const dragSource = DragSource('service', serviceSpec, collect)(Service)
export default connect(mapStateToProps, mapDispatchToProps)(dragSource)
