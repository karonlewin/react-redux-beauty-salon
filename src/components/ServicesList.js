import React from 'react';
import Service from './Service'
import { connect } from 'react-redux';

class ServicesList extends React.Component {
  onKeyUp = () => {
    let text = this.input.value.trim();
    this.props.dispatch({type: 'FILTER_SERVICE', serviceFilter: text})
  }

  render (){
    return (
      <nav className="services-list">
        <p className="panel-heading">
          Services
        </p>
        <div className="panel-block">
          <p className="control has-icons-left">
            <input className="input is-small is-danger" type="text" placeholder="search" ref={node => {this.input = node;}} onKeyUp={this.onKeyUp}/>
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

        {this.props.filteredServices.map((service, index) => (
          <Service service={service}/>
        ))}
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  filteredServices: state.services.filter(service => service.name.toLowerCase().startsWith(state.serviceFilter.toLowerCase()))
});

export default connect(mapStateToProps)(ServicesList);
