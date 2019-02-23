export const ADD_CLIENT = 'ADD_CLIENT'
export const ADD_CLIENT_ERROR = 'ADD_CLIENT_ERROR'
export const DRAG_SERVICE = 'DRAG_SERVICE'
export const DROP_SERVICE = 'DROP_SERVICE'
export const FILTER_SERVICE = 'FILTER_SERVICE'

export const actionAddClient = (clientName) => {
  if (clientName.length > 0){
    return { type: ADD_CLIENT, clientName: clientName }
  } else {
    return { type: ADD_CLIENT_ERROR }
  }
}

export const dragService = (service) => {
  return { type: DRAG_SERVICE, service: service };
}

export const dropService = (service, clientTarget) => {
  return { type: DROP_SERVICE, service: service, clientTarget: clientTarget };
}

export const filterService = (serviceFilter, serviceCategoryFilter) => {
  return { type: FILTER_SERVICE, serviceFilter: serviceFilter, serviceCategoryFilter: serviceCategoryFilter };
}
