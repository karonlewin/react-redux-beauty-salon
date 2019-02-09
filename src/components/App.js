import React, { Component } from 'react';
import ServicesList from './ServicesList'
import ClientList from './ClientList';
import AddClient from './AddClient';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import '../css/App.css';

const initialState = {
  clients: [
    {name: 'Rose', services: [], registered_at: new Date()},
    {name: 'John', services: [], registered_at: new Date()},
    // {name: 'Valerie', services: [], registered_at: new Date()},
    // {name: 'Humbert', services: [], registered_at: new Date()},
    // {name: 'Michael Jackson', services: [], registered_at: new Date()},
    // {name: 'Lady Gaga', services: [], registered_at: new Date()},
    // {name: 'Tim Burton', services: [], registered_at: new Date()},
    // {name: 'John Travolta', services: [], registered_at: new Date()},
    // {name: 'Rose Titanic', services: [], registered_at: new Date()},
    // {name: 'Maradonna', services: [], registered_at: new Date()},
    // {name: 'Neymar', services: [], registered_at: new Date()},
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
};

function reducer(state = initialState, action){
  console.log(action);
  switch (action.type) {
    case "ADD_CLIENT":
      return {...state,
          clients: state.clients.concat({name: action.client,
                                         services: [],
                                         registered_at: new Date()})};

    case "DRAG_SERVICE":
      return {...state, draggedService: action.service};
    case "DROP_SERVICE":
      const filteredClients = state.clients.filter(client => client.name !== action.clientTarget.name)
      return {...state,
              clients: [...filteredClients, {...action.clientTarget, services: [...action.clientTarget.services, action.service]}],
              draggedService: {}};
    }
  return state;
}

const store = createStore(reducer);

class App extends Component {
  isEmpty = obj => {
    for(var key in obj) {
      if(obj.hasOwnProperty(key))
      return false;
    }
    return true;
  }

  render() {
    return (
      <div className="container is-fluid">
        <section className="hero is-dark is-bold header-hero">
          <div className="hero-body">
            <div className="container is-fluid">
              <h1 className="title">
                Beauty Sallon
              </h1>
              <h2 className="subtitle">
                <small>
                  Made with ReactJS
                </small>
              </h2>
            </div>
          </div>
        </section>
        <div className="app-container">
          <Provider store={store}>
            <AddClient/>
            <ClientList/>
            <ServicesList/>
          </Provider>
        </div>
      </div>
    );
  }
}

export default App;
