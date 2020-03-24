var _ = require('lodash')

const ADD_CLIENT = 'ADD_CLIENT'
const ADD_CLIENT_ERROR = 'ADD_CLIENT_ERROR'
const REMOVE_CLIENT_SERVICE = 'REMOVE_CLIENT_SERVICE'
const DROP_SERVICE = 'DROP_SERVICE'

const initialState = {
  clients: [
    { id: new Date('Wed, 27 July 2017 07:45:00 GMT').getTime(), name: 'Rose', services: [], registered_at: new Date() },
    { id: new Date('Wed, 27 July 2018 07:45:00 GMT').getTime(), name: 'John', registered_at: new Date(), services: [{ name: 'Basic Facial', price: 55, category: 'facial', clientServiceId: Date.now() }] },
    { id: new Date('Wed, 27 July 2019 07:45:00 GMT').getTime(), name: 'Valerie', services: [], registered_at: new Date() }
  ]
}

export const clientsReducer = (state = initialState, action) => {
  let filteredClients = []

  switch (action.type) {
    case ADD_CLIENT:
      return {
        ...state,
        clients: state.clients.concat({
          name: action.clientName,
          services: [],
          registered_at: new Date()
        })
      }

    case ADD_CLIENT_ERROR:
      alert('Client with no name?! Really?')
      return state

    case DROP_SERVICE:
      filteredClients = state.clients.filter(client => client.name !== action.clientTarget.name)

      return {
        ...state,
        clients: [...filteredClients, { ...action.clientTarget, services: [...action.clientTarget.services, { ...action.service, clientServiceId: Date.now() }] }],
        draggedService: {}
      }

    case REMOVE_CLIENT_SERVICE:
      const client = _.find(state.clients, { id: action.payload.clientId })
      const filteredClientServices = client.services.filter(service => service.clientServiceId !== action.payload.clientServiceId)

      filteredClients = state.clients.filter(client => client.id !== action.payload.clientId)

      return {
        ...state,
        clients: [...filteredClients, { ...client, services: filteredClientServices }]
      }

    default:
      return state
  }
}
