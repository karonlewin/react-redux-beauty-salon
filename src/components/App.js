import React, { Component } from 'react'
import { combineReducers } from 'redux'
import { Provider } from 'react-redux'
import { DndProvider } from 'react-dnd'
import HTML5Backend from 'react-dnd-html5-backend'
import { clientsReducer } from '../reducers/clientsReducer'
import { servicesReducer } from '../reducers/servicesReducer'
import { configureStore } from '@reduxjs/toolkit'

import ServicesList from './ServicesList'
import ClientList from './ClientList'
import PaymentModal from './PaymentModal'
import AddClient from './AddClient'
import CompanyTotal from './CompanyTotal'

import '../css/App.css'

const rootReducer = combineReducers({
  clientsState: clientsReducer,
  servicesState: servicesReducer
})

const store = configureStore({ reducer: rootReducer })

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="hero is-dark is-bold header-hero">
          <div className="hero-body">
            <div className="columns">
              <div className="column is-four-fifths">
                <h1 className="title">
                  Beauty Sallon
                </h1>
                <h2 className="subtitle has-text-danger">
                  <small>
                    Made with React & Redux
                  </small>
                </h2>
              </div>
              <div className="column is-one-fifth">
                <CompanyTotal />
              </div>
            </div>
          </div>
        </div>
        <div className="app-container">
          <DndProvider backend={HTML5Backend}>
            <AddClient />
            <ClientList />
            <ServicesList />
            <PaymentModal />
          </DndProvider>
        </div>
      </Provider>
    )
  }
}

export default App
