import React, { Component } from 'react';
import ServiceList from './ServiceList'
import ClientList from './ClientList';
import AddClient from './AddClient';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import { DragDropContext } from 'react-dnd';
import HTML5Backend from 'react-dnd-html5-backend';
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
    {name: 'Basic Facial', price: 55, category: 'facial'},
    {name: 'Deluxe Facial', price: 75, category: 'facial'},
    {name: 'Acne Treatment', price: 95, category: 'facial'},
    {name: 'Milk Peel', price: 330, category: 'facial'},
    {name: 'Men Hair Cut', price: 26, category: 'hair'},
    {name: 'Women Hair Cut', price: 35, category: 'hair'},
    {name: 'Children Hair Cut', price: 20, category: 'hair'},
    {name: 'Permanent Color', price: 68, category: 'hair'},
    {name: 'Scalp Treatment', price: 35, category: 'hair'},
    {name: 'Gel Nails', price: 35, category: 'nails'},
    {name: 'Acrylic Nails', price: 45, category: 'nails'},
    {name: 'Manicure', price: 20, category: 'nails'},
    {name: 'Pedicure', price: 30, category: 'nails'},
    {name: 'Hair Tincture', price: 20, category: 'products'},
    {name: 'Hair Tincture PRO', price: 40, category: 'products'},
    {name: 'Oil Hair Tretament 100ml', price: 25, category: 'products'},
    {name: 'Carolina Herrera Parfum', price: 100, category: 'others'},
    {name: 'Chocolate', price: 3, category: 'others'},
    {name: 'Coke', price: 5, category: 'others'}


  ],
  draggedService: {},
  serviceFilter: '',
  serviceCategoryFilter: ''
};


function reducer(state = initialState, action){
  console.log(action);
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
      const filteredClients = state.clients.filter(client => client.name !== action.clientTarget.name)
      return {...state,
              clients: [...filteredClients, {...action.clientTarget, services: [...action.clientTarget.services, action.service]}],
              draggedService: {}};
    case "FILTER_SERVICE":
      return {...state, serviceFilter: action.serviceFilter === undefined ? state.serviceFilter : action.serviceFilter, serviceCategoryFilter: action.serviceCategoryFilter === undefined ? state.serviceCategoryFilter : action.serviceCategoryFilter};
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
          <Provider store={store}>
            <AddClient/>
            <ClientList/>
            <ServiceList/>
          </Provider>
        </div>
      </div>
    );
  }
}

export default DragDropContext(HTML5Backend)(App);
