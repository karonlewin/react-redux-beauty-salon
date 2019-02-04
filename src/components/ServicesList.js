import React from 'react';
import Service from './Service'

class ServicesList extends React.Component {
  render (){
    return (
      <nav className="services-list">
        <p className="panel-heading">
          Services
        </p>
        <div className="panel-block">
          <p className="control has-icons-left">
            <input className="input is-small is-danger" type="text" placeholder="search"/>
            <span className="icon is-small is-left">
              <i className="fas fa-search" aria-hidden="true"></i>
            </span>
          </p>
        </div>
        <p className="panel-tabs">
          <a className="is-active has-text-danger">all</a>
          <a className="has-text-danger">hair</a>
          <a className="has-text-danger">nails</a>
          <a className="has-text-danger">products</a>
          <a className="has-text-danger">others</a>
        </p>

        {this.props.services.map((service, index) => (
          <Service service={service} onDragService={this.props.onDragService}/>
        ))}
      </nav>
    )
  }
}

export default ServicesList;
