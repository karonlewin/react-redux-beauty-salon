import { createReducer } from '@reduxjs/toolkit';

const initialState = {
  clients: {
    [Math.floor(Math.random() * 100)]: { name: 'Rose', registeredAt: Date.now(), services: {} },
    [Math.floor(Math.random() * 100)]: { name: 'John', registeredAt: Date.now(), services: { [Math.floor(Math.random() * 100)]: { name: 'Basic Facial', price: 55, category: 'facial', clientServiceId: Date.now() }, [Math.floor(Math.random() * 100)]: { name: 'Basic Facial', price: 55, category: 'facial', clientServiceId: Date.now() } } },
    [Math.floor(Math.random() * 100)]: { name: 'Valerie', registeredAt: Date.now(), services: {} },
  }
}

// NOTE: createReducer uses Immer to let you write reducers as if they 
// were mutating the state directly. In reality, the reducer receives 
// a proxy state that translates all mutations into equivalent copy operations.

export const clientsReducer = createReducer(initialState, {
  ADD_CLIENT: (state, action) => {
    const newClient = { name: action.payload.clientName, services: [], registeredAt: Date.now() }
    
    state.clients[Date.now()] = newClient
  },

  DROP_SERVICE: (state, action) => {
    console.warn({action})
    const client = state.clients[action.payload.clientId]

    client.services[Math.floor(Math.random() * 100)] = { ...action.payload.service, clientServiceId: Date.now() }
  },

  REMOVE_CLIENT_SERVICE: (state, action) => {
    const client = state.clients[action.payload.clientId]
    
    delete client.services[action.payload.clientServiceId]
  }
})
