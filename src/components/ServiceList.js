import React from 'react';
import Service from './Service'

class ServiceList extends React.Component {
  render (){
    return (
      <div>
        <b>Services:</b>
        {this.props.services.map((service, index) => (
          <Service service={service} key={service.id}/>
        ))}
      </div>
    )
  }
}

export default ServiceList;
