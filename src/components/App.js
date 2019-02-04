import React, { Component } from 'react';
import ServicesList from './ServicesList'
import ClientList from './ClientList';
import AddClient from './AddClient';
import '../css/App.css';

class App extends Component {
  state = {
    clients: [
      {name: 'Rose', services: [], registered_at: new Date()},
      {name: 'John', services: [], registered_at: new Date()},
      {name: 'Valerie', services: [], registered_at: new Date()},
      {name: 'Humbert', services: [], registered_at: new Date()},
      {name: 'Michael Jackson', services: [], registered_at: new Date()},
      {name: 'Lady Gaga', services: [], registered_at: new Date()},
      {name: 'Tim Burton', services: [], registered_at: new Date()},
      {name: 'John Travolta', services: [], registered_at: new Date()},
      {name: 'Rose Titanic', services: [], registered_at: new Date()},
      {name: 'Maradonna', services: [], registered_at: new Date()},
      {name: 'Neymar', services: [], registered_at: new Date()},
      {name: 'Maria', services: [], registered_at: new Date()}
    ],
    services: [
      {name: 'Basic Facial', price: 55},
      {name: 'Deluxe Facial', price: 75},
      {name: 'Acne Treatment', price: 95},
      {name: 'Milk Peel', price: 330},
      {name: 'Men Hair Cut', price: 26},
      {name: 'Women Hair Cut', price: 35},
      {name: 'Children Hair Cut', price: 20},
      {name: 'Permanent Color', price: 68},
      {name: 'Scalp Treatment', price: 35}
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

    const filteredClients = clients.filter(client => client.name !== clientTarget.name)
    this.setState({
      clients: [...filteredClients, {...clientTarget, services: [...clientTarget.services, draggedService]}],
      draggedService: {},
    });
  }

  addClient = (name) => {
    const { clients } = this.state;
    this.setState({
      clients: [...clients, {name: name, services: [], registered_at: new Date()}],
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
      <div className="container is-fluid">
        <section class="hero is-dark is-bold header-hero">
          <div class="hero-body">
            <div class="container is-fluid">
              <h1 class="title">
                Beauty Sallon
              </h1>
              <h2 class="subtitle">
                <small>
                  Made with ReactJS
                </small>
              </h2>
            </div>
          </div>
        </section>
        <div className="app-container">
          <AddClient addClient={this.addClient} clientInput={this.state.clientInput} updateClientInput={this.updateClientInput}/>
          <ClientList clients={this.state.clients.sort(sortClients)} onDragOver={this.onDragOver} onDropService={this.onDropService}/>
          <ServicesList services={this.state.services} onDragService={this.onDragService}/>
        </div>
      </div>
    );
  }
}

export default App;
