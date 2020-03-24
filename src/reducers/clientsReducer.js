import _ from 'lodash';

const ADD_CLIENT = 'ADD_CLIENT'
const ADD_CLIENT_ERROR = 'ADD_CLIENT_ERROR'
const REMOVE_CLIENT_SERVICE = 'REMOVE_CLIENT_SERVICE'
const DROP_SERVICE = 'DROP_SERVICE'

const initialState = {
  clients: [
    { id: new Date('Wed, 27 July 2017 07:45:00 GMT').getTime(), name: 'Rose', services: [], registeredAt: new Date() },
    { id: new Date('Wed, 27 July 2018 07:45:00 GMT').getTime(), name: 'John', registeredAt: new Date(), services: [{ name: 'Basic Facial', price: 55, category: 'facial', clientServiceId: Date.now() }] },
    { id: new Date('Wed, 27 July 2019 07:45:00 GMT').getTime(), name: 'Valerie', services: [], registeredAt: new Date() }
  ]
}

export const clientsReducer = (state = initialState, action) => {
  let filteredClients = []
  let client = null
  let filteredClientServices = []

  switch (action.type) {
    case ADD_CLIENT:
      return {
        ...state,
        clients: state.clients.concat({
          name: action.clientName,
          services: [],
          registeredAt: new Date()
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
      client = _.find(state.clients, { id: action.payload.clientId })
      filteredClientServices = client.services.filter(service => service.clientServiceId !== action.payload.clientServiceId)

      filteredClients = state.clients.filter(client => client.id !== action.payload.clientId)

      return {
        ...state,
        clients: [...filteredClients, { ...client, services: filteredClientServices }]
      }

    default:
      return state
  }
}
