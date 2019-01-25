import React, { Component } from 'react';
import ServiceList from './ServiceList'
import ClientList from './ClientList';
import '../css/App.css';

class App extends Component {
  state = {
    clients: [
      {name: 'Rose'},
      {name: 'John'},
      {name: 'Maria'}
    ],
    services: [
      {name: 'Hair Wash', price: 5},
      {name: 'Manicure', price: 20},
      {name: 'Hair Cut', price: 40},
      {name: 'Hair Hydratation', price: 60}
    ]
  }
  render() {
    return (
      <div className="App">
        <ClientList clients={this.state.clients}/>
        <ServiceList services={this.state.services}/>
      </div>
    );
  }
}

export default App;
