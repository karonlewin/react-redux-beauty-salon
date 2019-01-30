import React, { Component } from 'react';
import ServiceList from './ServiceList'
import ClientList from './ClientList';
import AddClient from './AddClient';
import '../css/App.css';

class App extends Component {
  state = {
    clients: [
      {name: 'Rose', services: []},
      {name: 'John', services: []},
      {name: 'Maria', services: []}
    ],
    services: [
      {name: 'Hair Wash', price: 5},
      {name: 'Manicure', price: 20},
      {name: 'Hair Cut', price: 40},
      {name: 'Hair Hydratation', price: 60}
    ],
    draggedService: {},
    clientInput: ''
  }

  isEmpty = obj => {
    for(var key in obj) {
        if(obj.hasOwnProperty(key))
            return false;
    }
    return true;
  }

  onDragService = (event, service) => {
    event.preventDefault();
    this.setState({
      draggedService: service
    });
  }

  onDragOver = (event) => {
    event.preventDefault();
  }

  onDropService = (event, clientTarget) => {
    const { clients, draggedService } = this.state;

    // Preventing dragging services from other customers
    if (this.isEmpty(draggedService)){
      return;
    }

    const filteredClients = clients.filter(client => client.name != clientTarget.name)
    this.setState({
      clients: [...filteredClients, {...clientTarget, services: [...clientTarget.services, draggedService]}],
      draggedService: {},
    });
  }

  addClient = (name) => {
    const { clients } = this.state;
    this.setState({
      clients: [...clients, {name: name, services: []}],
      clientInput: ''
    })
  }

  updateClientInput = (text) => {
    this.setState({
      clientInput: text
    })
  }

  render() {

    function sortClients(a, b) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    }

    return (
      <div className="App">
        <AddClient addClient={this.addClient} clientInput={this.state.clientInput} updateClientInput={this.updateClientInput}/>
        <ClientList clients={this.state.clients.sort(sortClients)} onDragOver={this.onDragOver} onDropService={this.onDropService}/>
        <ServiceList services={this.state.services} onDragService={this.onDragService}/>
      </div>
    );
  }
}

export default App;
