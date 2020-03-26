import React from 'react';
import Service from './Service'
import { filterService } from '../actions/actionCreators'
import { connect } from 'react-redux';

class ServicesList extends React.Component {
  onKeyUp = () => {
    let text = this.input.value.trim();
    this.props.filterService(text, undefined);
  }

  onCategoryClick = (category) => {
    this.props.filterService(undefined, category);
  }

  render (){

    const filteredServices = this.props.filteredServices

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
          <a href="#" className={this.props.serviceCategoryFilter === '' ? 'is-active ' : '' + "has-text-danger"} onClick={() => this.onCategoryClick('')}>all</a>
          <a href="#" className={this.props.serviceCategoryFilter === 'facial' ? 'is-active ' : '' + "has-text-danger"} onClick={() => this.onCategoryClick('facial')}>facial</a>
          <a href="#" className={this.props.serviceCategoryFilter === 'hair' ? 'is-active ' : '' + "has-text-danger"} onClick={() => this.onCategoryClick('hair')}>hair</a>
          <a href="#" className={this.props.serviceCategoryFilter === 'nails' ? 'is-active ' : '' + "has-text-danger"} onClick={() => this.onCategoryClick('nails')}>nails</a>
          <a href="#" className={this.props.serviceCategoryFilter === 'products' ? 'is-active ' : '' + "has-text-danger"} onClick={() => this.onCategoryClick('products')}>products</a>
          <a href="#" className={this.props.serviceCategoryFilter === 'others' ? 'is-active ' : '' + "has-text-danger"} onClick={() => this.onCategoryClick('others')}>others</a>
        </p>
        {
          Object.keys(filteredServices).map(key => (
            <Service service={filteredServices[key]} key={filteredServices[key].name} />
          ))
        }
      </nav>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterService: (serviceFilter, serviceCategoryFilter) => { dispatch(filterService(serviceFilter, serviceCategoryFilter)) }
});

const mapStateToProps = store => ({
  filteredServices: store.servicesState.services
  // .filter(
  //   service => service.name.toLowerCase().match(store.servicesState.serviceFilter.toLowerCase()) &&
  //               service.category === (store.servicesState.serviceCategoryFilter === '' ? service.category : store.servicesState.serviceCategoryFilter)
  // )
  ,
  serviceCategoryFilter: store.servicesState.serviceCategoryFilter
});

export default connect(mapStateToProps, mapDispatchToProps)(ServicesList);
