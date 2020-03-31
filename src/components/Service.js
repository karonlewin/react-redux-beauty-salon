import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { DragSource } from 'react-dnd'
import CategoryIcon from './CategoryIcon'
import { actionDragService, actionDropService } from '../actions/actionCreators'

const serviceSpec = {
  beginDrag (props) {
    return props.service
  },
  
  endDrag (props, monitor) {
    if (!monitor.didDrop()) {
      return
    }
    
    // monitor.getDropResult() returns an object containing the clientId
    // so we know for which client this service should be added
    const { clientId } = monitor.getDropResult()

    props.actionDropService(props.service, clientId)
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
      <div style={{width: '100%'}}>
        <CategoryIcon category={service.category}/>
        {service.name} (${service.price})
      </div>
    )
  }
}

Service.propTypes = {
  service: PropTypes.shape({
    name: PropTypes.string,
    category: PropTypes.string,
    price: PropTypes.number
  }),
  connectDragSource: PropTypes.instanceOf(Function)
}

const mapDispatchToProps = (dispatch) => ({
  actionDragService: (service) => {
    dispatch(actionDragService(service))
  },
  actionDropService: (service, clientId) => {
    dispatch(actionDropService(service, clientId))
  }
})

const mapStateToProps = (state) => ({
  draggedService: state.draggedService
})

const dragSource = DragSource('service', serviceSpec, collect)(Service)
export default connect(mapStateToProps, mapDispatchToProps)(dragSource)
