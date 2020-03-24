import React, { Component } from 'react'
import ServicesList from './ServicesList'
import ClientList from './ClientList'
import AddClient from './AddClient'
import { createStore, combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { DndProvider } from 'react-dnd'

import HTML5Backend from 'react-dnd-html5-backend'
import { clientsReducer } from '../reducers/clientsReducer'
import { servicesReducer } from '../reducers/servicesReducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import '../css/App.css'

const rootReducer = combineReducers({
  clientsState: clientsReducer,
  servicesState: servicesReducer
})

const store = createStore(rootReducer, composeWithDevTools())

class App extends Component {
  render () {
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
    )
  }
}

export default App
