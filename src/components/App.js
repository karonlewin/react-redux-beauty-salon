import React, { Component } from 'react';
import ServiceList from './ServiceList'
import ClientList from './ClientList';
import AddClient from './AddClient';
import '../css/App.css';

class App extends Component {
  state = {
    clientServices: [
      {id: 1, client: 'Rose', services: [{id: 1, name: 'Hair Wash', price: 5}, {id: 3, name: 'Hair Cut', price: 40}, {id: 2, name: 'Manicure', price: 20}]},
      {id: 2, client: 'John', services: [{id: 3, name: 'Hair Cut', price: 40}]},
      {id: 3, client: 'Maria', services: [{id: 3, name: 'Hair Cut', price: 40}, {id: 2, name: 'Manicure', price: 20}]},
      {id: 4, client: 'Victor', services: []}
    ],
    services: [
      {id: 1, name: 'Hair Wash', price: 5},
      {id: 2, name: 'Manicure', price: 20},
      {id: 3, name: 'Hair Cut', price: 40},
      {id: 4, name: 'Hair Hydratation', price: 60}
    ]
  }
  render() {
    return (
      <div className="columns">
        <div className="column">
          <AddClient/>
          <ClientList clientServices={this.state.clientServices} />
        </div>
        <div className="column">
          <ServiceList services={this.state.services} />
        </div>
      </div>
    );
  }
}

export default App;
