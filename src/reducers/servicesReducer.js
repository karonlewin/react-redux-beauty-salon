import { createReducer } from '@reduxjs/toolkit';
import _ from 'lodash';

const servicesSample = {
  [Math.floor(Math.random() * 100)]: { name: 'Deluxe Facial', price: 75, category: 'facial' },
  [Math.floor(Math.random() * 100)]: { name: 'Basic Facial', price: 55, category: 'facial' },
  [Math.floor(Math.random() * 100)]: { name: 'Acne Treatment', price: 95, category: 'facial' },
  [Math.floor(Math.random() * 100)]: { name: 'Milk Peel', price: 330, category: 'facial' },

  [Math.floor(Math.random() * 100)]: { name: 'Women Hair Cut', price: 35, category: 'hair' },
  [Math.floor(Math.random() * 100)]: { name: 'Children Hair Cut', price: 20, category: 'hair' },
  [Math.floor(Math.random() * 100)]: { name: 'Permanent Color', price: 68, category: 'hair' },
  [Math.floor(Math.random() * 100)]: { name: 'Scalp Treatment', price: 35, category: 'hair' },
  [Math.floor(Math.random() * 100)]: { name: 'Men Hair Cut', price: 26, category: 'hair' },

  [Math.floor(Math.random() * 100)]: { name: 'Gel Nails', price: 35, category: 'nails' },
  [Math.floor(Math.random() * 100)]: { name: 'Acrylic Nails', price: 45, category: 'nails' },
  [Math.floor(Math.random() * 100)]: { name: 'Manicure', price: 20, category: 'nails' },
  [Math.floor(Math.random() * 100)]: { name: 'Pedicure', price: 30, category: 'nails' },

  [Math.floor(Math.random() * 100)]: { name: 'Hair Tincture', price: 20, category: 'products' },
  [Math.floor(Math.random() * 100)]: { name: 'Hair Tincture PRO', price: 40, category: 'products' },
  [Math.floor(Math.random() * 100)]: { name: 'Oil Hair Tretament 100ml', price: 25, category: 'products' },

  [Math.floor(Math.random() * 100)]: { name: 'Carolina Herrera Parfum', price: 100, category: 'others' },
  [Math.floor(Math.random() * 100)]: { name: 'Chocolate', price: 3, category: 'others' },
  [Math.floor(Math.random() * 100)]: { name: 'Coke', price: 5, category: 'others' }
}

const initialState = {
  services: servicesSample,
  serviceNameFilter: '',
  serviceCategoryFilter: '',
  servicesResult: servicesSample
}

// NOTE: createReducer uses Immer to let you write reducers as if they 
// were mutating the state directly. In reality, the reducer receives 
// a proxy state that translates all mutations into equivalent copy operations.

export const servicesReducer = createReducer(initialState, {
  FILTER_SERVICE: (state, action) => {
    const nextServiceNameFilter = action.payload.serviceNameFilter || ''
    const nextServiceCategoryFilter = action.payload.serviceCategoryFilter || ''

    state.serviceNameFilter = nextServiceNameFilter
    state.serviceCategoryFilter = nextServiceCategoryFilter

    const filteredServices = _.filter(state.services, function (service) { 
      return service.name.toLowerCase().match(nextServiceNameFilter.toLowerCase()) && 
        service.category === (_.isEmpty(nextServiceCategoryFilter) ? service.category : nextServiceCategoryFilter)
    });
    
    state.servicesResult = filteredServices
  },

})