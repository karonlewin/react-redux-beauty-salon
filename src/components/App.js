import React, { Component } from 'react';
import ServicesList from './ServicesList'
import ClientList from './ClientList';
import AddClient from './AddClient';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import { DragDropContext } from 'react-dnd';
import { DndProvider } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
import '../css/App.css';

var _ = require('lodash');

const initialState = {
  clients: [
    { id: new Date("Wed, 27 July 2017 07:45:00 GMT").getTime(), name: 'Rose', services: [], registered_at: new Date()},
    { id: new Date("Wed, 27 July 2018 07:45:00 GMT").getTime(), name: 'John', services: [], registered_at: new Date(), services: [{ name: "Basic Facial", price: 55, category: "facial", clientServiceId: Date.now() }] },
    { id: new Date("Wed, 27 July 2019 07:45:00 GMT").getTime(), name: 'Valerie', services: [], registered_at: new Date() },
    // { id: Date.now(), name: 'Humbert', services: [], registered_at: new Date() },
    // { id: Date.now(), name: 'Michael Jackson', services: [], registered_at: new Date() },
    // { id: Date.now(), name: 'Lady Gaga', services: [], registered_at: new Date() },
    // { id: Date.now(), name: 'Tim Burton', services: [], registered_at: new Date() },
    // { id: Date.now(), name: 'John Travolta', services: [], registered_at: new Date() },
    // { id: Date.now(), name: 'Rose Titanic', services: [], registered_at: new Date() },
    // { id: Date.now(), name: 'Maradonna', services: [], registered_at: new Date() },
    // { id: Date.now(), name: 'Neymar', services: [], registered_at: new Date() },
    // { id: Date.now(), name: 'Maria', services: [], registered_at: new Date( )}
  ],
  services: [
    { id: Date.now(), name: 'Basic Facial', price: 55, category: 'facial' },
    { id: Date.now(), name: 'Deluxe Facial', price: 75, category: 'facial' },
    { id: Date.now(), name: 'Acne Treatment', price: 95, category: 'facial' },
    { id: Date.now(), name: 'Milk Peel', price: 330, category: 'facial' },
    { id: Date.now(), name: 'Men Hair Cut', price: 26, category: 'hair' },
    { id: Date.now(), name: 'Women Hair Cut', price: 35, category: 'hair' },
    { id: Date.now(), name: 'Children Hair Cut', price: 20, category: 'hair' },
    { id: Date.now(), name: 'Permanent Color', price: 68, category: 'hair' },
    { id: Date.now(), name: 'Scalp Treatment', price: 35, category: 'hair' },
    { id: Date.now(), name: 'Gel Nails', price: 35, category: 'nails' },
    { id: Date.now(), name: 'Acrylic Nails', price: 45, category: 'nails' },
    { id: Date.now(), name: 'Manicure', price: 20, category: 'nails' },
    { id: Date.now(), name: 'Pedicure', price: 30, category: 'nails' },
    { id: Date.now(), name: 'Hair Tincture', price: 20, category: 'products' },
    { id: Date.now(), name: 'Hair Tincture PRO', price: 40, category: 'products' },
    { id: Date.now(), name: 'Oil Hair Tretament 100ml', price: 25, category: 'products' },
    { id: Date.now(), name: 'Carolina Herrera Parfum', price: 100, category: 'others' },
    { id: Date.now(), name: 'Chocolate', price: 3, category: 'others' },
    { id: Date.now(), name: 'Coke', price: 5, category: 'others '}


  ],
  draggedService: {},
  serviceFilter: '',
  serviceCategoryFilter: ''
};


function reducer(state = initialState, action){
  console.log(action);

  let filteredClients = []

  switch (action.type) {
    case "ADD_CLIENT":
      return {...state,
          clients: state.clients.concat({name: action.clientName,
                                         services: [],
                                         registered_at: new Date()})};

    case "ADD_CLIENT_ERROR":
      alert('Client with no name?! Really?')
      return state;

    case "DRAG_SERVICE":
      return {...state, draggedService: action.service};

    case "DROP_SERVICE":
      filteredClients = state.clients.filter(client => client.name !== action.clientTarget.name)
      
      return {...state,
        clients: [...filteredClients, { ...action.clientTarget, services: [...action.clientTarget.services, { ...action.service, clientServiceId: Date.now() }]}],
              draggedService: {}};

    case "FILTER_SERVICE":
      return {...state, serviceFilter: action.serviceFilter === undefined ? state.serviceFilter : action.serviceFilter, serviceCategoryFilter: action.serviceCategoryFilter === undefined ? state.serviceCategoryFilter : action.serviceCategoryFilter};

    case "REMOVE_CLIENT_SERVICE":
      const client = _.find(state.clients, { id: action.clientId });
      const filteredClientServices = client.services.filter(service => service.clientServiceId !== action.clientServiceId)

      filteredClients = state.clients.filter(client => client.id !== action.clientId)

      const clientServices = client.services
      console.warn({ action, client, filteredClients, clientServices, filteredClientServices})

      return { ...state, 
        clients: [ ...filteredClients, { ...client, services: filteredClientServices } ]};
    default:
      return state
  }
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
          <DndProvider backend={HTML5Backend}>
            <Provider store={store}>
              <AddClient/>
              <ClientList/>
              <ServicesList/>
            </Provider>
          </DndProvider>
        </div>
      </div>
    );
  }
}

export default App;
