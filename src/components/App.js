import React, { Component } from 'react'
import ServicesList from './ServicesList'
import ClientList from './ClientList'
import PaymentModal from './PaymentModal'
import AddClient from './AddClient'
import { combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { DndProvider } from 'react-dnd'

import HTML5Backend from 'react-dnd-html5-backend'
import { clientsReducer } from '../reducers/clientsReducer'
import { servicesReducer } from '../reducers/servicesReducer'
import '../css/App.css'

import { configureStore } from '@reduxjs/toolkit'

const rootReducer = combineReducers({
  clientsState: clientsReducer,
  servicesState: servicesReducer
})

const store = configureStore({ reducer: rootReducer })

class App extends Component {
  render () {
    return (
      <div className="container is-fluid is-unselectable">
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
          <DndProvider backend={HTML5Backend}>
              <AddClient/>
              <ClientList/>
              <ServicesList/>
              <PaymentModal/>
          </DndProvider>
            </Provider>
        </div>
      </div>
    )
  }
}

export default App
