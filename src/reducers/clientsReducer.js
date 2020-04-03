import { createReducer } from '@reduxjs/toolkit';
import _ from 'lodash';

const initialState = {
  clients: [
    { id: Math.floor(Math.random() * 100), name: 'Rose', registeredAt: Date.now(), billPaid: false, services: {} },
    { id: Math.floor(Math.random() * 100), name: 'John', registeredAt: Date.now(), billPaid: false, services: { [Math.floor(Math.random() * 100)]: { name: 'Basic Facial', price: 55, category: 'facial', clientServiceId: Date.now() }, [Math.floor(Math.random() * 100)]: { name: 'Basic Facial', price: 55, category: 'facial', clientServiceId: Date.now() } } },
    { id: Math.floor(Math.random() * 100), name: 'Valerie', registeredAt: Date.now(), billPaid: false, services: {} },
  ],
  isPaymentModalOpen: false,
  clientForPayment: null
}

// NOTE: createReducer uses Immer to let you write reducers as if they 
// were mutating the state directly. In reality, the reducer receives 
// a proxy state that translates all mutations into equivalent copy operations.

export const clientsReducer = createReducer(initialState, {
  ADD_CLIENT: (state, action) => {
    const newClient = { id: Date.now(), name: action.payload.clientName, services: [], registeredAt: Date.now() }

    state.clients.push(newClient)
  },

  REMOVE_CLIENT: (state, action) => {
    _.remove(state.clients, { id: action.payload.clientId })
  },

  MARK_CLIENT_SERVICES_STATUS_AS_PAID: (state, action) => {
    const clientIndex = state.clients.findIndex(client => client.id == action.payload.clientId);
    const client = state.clients[clientIndex]

    client.billPaid = true  
    state.isPaymentModalOpen = false
  },

  OPEN_PAYMENT_MODAL: (state, action) => {
    state.isPaymentModalOpen = true
    state.clientForPayment = { ...action.payload.client }
  },

  CLOSE_PAYMENT_MODAL: (state) => {
    state.isPaymentModalOpen = false
  },

  DROP_SERVICE: (state, action) => {
    const clientIndex = state.clients.findIndex(client => client.id == action.payload.clientId);
    const client = state.clients[clientIndex]

    client.services[Math.floor(Math.random() * 100)] = { ...action.payload.service, clientServiceId: Date.now() }
  },

  REMOVE_CLIENT_SERVICE: (state, action) => {
    const clientIndex = state.clients.findIndex(client => client.id == action.payload.clientId);
    const client = state.clients[clientIndex]
    
    delete client.services[action.payload.clientServiceId]
  }
})
