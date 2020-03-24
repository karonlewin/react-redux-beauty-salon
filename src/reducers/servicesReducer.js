const DRAG_SERVICE = 'DRAG_SERVICE'
const FILTER_SERVICE = 'FILTER_SERVICE'

const initialState = {
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
    { id: Date.now(), name: 'Coke', price: 5, category: 'others ' }
  ],
  draggedService: {},
  serviceFilter: '',
  serviceCategoryFilter: ''
}

export const servicesReducer = (state = initialState, action) => {
  switch (action.type) {
    case DRAG_SERVICE:
      return { ...state, draggedService: action.service }

    case FILTER_SERVICE:
      return { ...state, serviceFilter: action.serviceFilter === undefined ? state.serviceFilter : action.serviceFilter, serviceCategoryFilter: action.serviceCategoryFilter === undefined ? state.serviceCategoryFilter : action.serviceCategoryFilter }

    default:
      return state
  }
}
