export const ADD_CLIENT = 'ADD_CLIENT'
export const REMOVE_CLIENT = 'REMOVE_CLIENT'
export const ADD_CLIENT_ERROR = 'ADD_CLIENT_ERROR'
export const REMOVE_CLIENT_SERVICE = 'REMOVE_CLIENT_SERVICE'
export const MARK_CLIENT_SERVICES_STATUS_AS_PAID = 'MARK_CLIENT_SERVICES_STATUS_AS_PAID'

export const OPEN_PAYMENT_MODAL = 'OPEN_PAYMENT_MODAL'
export const CLOSE_PAYMENT_MODAL = 'CLOSE_PAYMENT_MODAL'

export const DRAG_SERVICE = 'DRAG_SERVICE'
export const DROP_SERVICE = 'DROP_SERVICE'
export const FILTER_SERVICE = 'FILTER_SERVICE'

export const actionAddClient = (clientName) => {
  if (clientName.length > 0) {
    return { type: ADD_CLIENT, payload: { clientName } }
  } else {
    return { type: ADD_CLIENT_ERROR }
  }
}

export const actionRemoveClient = (clientId) => {
  return { type: REMOVE_CLIENT, payload: { clientId } }
}

export const actionRemoveClientService = (clientId, clientServiceId) => {
  return { type: REMOVE_CLIENT_SERVICE, payload: { clientId, clientServiceId } }
}

export const actionMarkClientServicesStatusAsPaid = (clientId) => {
  return { type: MARK_CLIENT_SERVICES_STATUS_AS_PAID, payload: { clientId } }
}

export const actionOpenPaymentModal = (client) => {
  return { type: OPEN_PAYMENT_MODAL, payload: { client } }
}

export const actionClosePaymentModal = () => {
  return { type: CLOSE_PAYMENT_MODAL }
}

export const actionDragService = (service) => {
  return { type: DRAG_SERVICE, payload: { service } }
}

export const actionDropService = (service, clientId) => {
  return { type: DROP_SERVICE, payload: { service, clientId } }
}

export const actionFilterService = (serviceNameFilter, serviceCategoryFilter) => {
  return { type: FILTER_SERVICE, payload: { serviceNameFilter, serviceCategoryFilter } } }
