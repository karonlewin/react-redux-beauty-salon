import React from 'react';
import Service from './Service'
import { connect } from 'react-redux';

class ServicesList extends React.Component {
  onKeyUp = () => {
    let text = this.input.value.trim();
    this.props.dispatch({type: 'FILTER_SERVICE', serviceFilter: text})
  }

  onCategoryClick = (category) => {
    this.props.dispatch({type: 'FILTER_SERVICE', serviceCategoryFilter: category})
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
          <a className={this.props.serviceCategoryFilter === '' ? 'is-active ' : '' + "has-text-danger"} onClick={() => this.onCategoryClick('')}>all</a>
          <a className={this.props.serviceCategoryFilter === 'hair' ? 'is-active ' : '' + "has-text-danger"} onClick={() => this.onCategoryClick('hair')}>hair</a>
          <a className={this.props.serviceCategoryFilter === 'nails' ? 'is-active ' : '' + "has-text-danger"} onClick={() => this.onCategoryClick('nails')}>nails</a>
          <a className={this.props.serviceCategoryFilter === 'products' ? 'is-active ' : '' + "has-text-danger"} onClick={() => this.onCategoryClick('products')}>products</a>
          <a className={this.props.serviceCategoryFilter === 'others' ? 'is-active ' : '' + "has-text-danger"} onClick={() => this.onCategoryClick('others')}>others</a>
        </p>

        {this.props.filteredServices.map((service, index) => (
          <Service service={service}/>
        ))}
      </nav>
    )
  }
}

const mapStateToProps = state => ({
  filteredServices: state.services.filter(
    service => service.name.toLowerCase().startsWith(state.serviceFilter.toLowerCase()) &&
                service.category === (state.serviceCategoryFilter === '' ? service.category : state.serviceCategoryFilter)
  ),
  serviceCategoryFilter: state.serviceCategoryFilter
});

export default connect(mapStateToProps)(ServicesList);
