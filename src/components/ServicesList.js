import React from 'react';
import Service from './Service'
import { filterService, dragService, dropService } from '../actions/actionCreators'
import { connect } from 'react-redux';

class ServicesList extends React.Component {
  onKeyUp = () => {
    let text = this.input.value.trim();
    // this.props.dispatch({type: 'FILTER_SERVICE', serviceFilter: text})
    this.props.filterService(text, undefined);
  }

  onCategoryClick = (category) => {
    // this.props.dispatch({type: 'FILTER_SERVICE', serviceCategoryFilter: category})
    this.props.filterService(undefined, category);
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
          <a className={this.props.serviceCategoryFilter === 'facial' ? 'is-active ' : '' + "has-text-danger"} onClick={() => this.onCategoryClick('facial')}>facial</a>
          <a className={this.props.serviceCategoryFilter === 'hair' ? 'is-active ' : '' + "has-text-danger"} onClick={() => this.onCategoryClick('hair')}>hair</a>
          <a className={this.props.serviceCategoryFilter === 'nails' ? 'is-active ' : '' + "has-text-danger"} onClick={() => this.onCategoryClick('nails')}>nails</a>
          <a className={this.props.serviceCategoryFilter === 'products' ? 'is-active ' : '' + "has-text-danger"} onClick={() => this.onCategoryClick('products')}>products</a>
          <a className={this.props.serviceCategoryFilter === 'others' ? 'is-active ' : '' + "has-text-danger"} onClick={() => this.onCategoryClick('others')}>others</a>
        </p>

        {this.props.filteredServices.map((service, index) => (
          <Service service={service} key={service.name} dragService={this.props.dragService} dropService={this.props.dropService}/>
        ))}
      </nav>
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  filterService: (serviceFilter, serviceCategoryFilter) => { dispatch(filterService(serviceFilter, serviceCategoryFilter)) },
  dragService: (service) => { dispatch(dragService(service)) },
  dropService: (service, clientTarget) => { dispatch(dropService(service, clientTarget)) }
});

const mapStateToProps = state => ({
  filteredServices: state.services.filter(
    service => service.name.toLowerCase().match(state.serviceFilter.toLowerCase()) &&
                service.category === (state.serviceCategoryFilter === '' ? service.category : state.serviceCategoryFilter)
  ),
  serviceCategoryFilter: state.serviceCategoryFilter
});

export default connect(mapStateToProps, mapDispatchToProps)(ServicesList);
