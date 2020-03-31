import React from 'react'
import ClientTotal from './ClientTotal'
import { connect } from 'react-redux'

import { actionClosePaymentModal } from '../actions/actionCreators'

class PaymentModal extends React.Component {

  closePaymentModal = () => {
    this.props.actionClosePaymentModal()
  }

  render() {
    const clientForPayment = this.props.clientForPayment
    const clientServices = clientForPayment ? clientForPayment.services : []
    const isPaymentModalOpen = this.props.isPaymentModalOpen

    return (
      isPaymentModalOpen && (
        <div className="modal is-active">
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">
                Cashier
              </p>
              <button className="delete" aria-label="close" onClick={() => this.closePaymentModal()}></button>
            </header>
            <section className="modal-card-body">
              <div className="tile is-ancestor">
                <div className="tile is-vertical is-8">
                  <div class="tile">
                    <div class="tile is-parent is-vertical">
                      <article class="tile is-child notification is-primary">
                        <p className="title is-size-4">{clientForPayment.name}</p>
                        <p className="subtitle is-size-6">@{clientForPayment.name.trim().toLowerCase()}</p>
                      </article>
                      <article class="tile is-child notification ">
                        <p className="title is-size-6">Services:</p>
                        <ul>
                          {
                            Object.keys(clientServices).map(key => (
                              <li>• {clientServices[key].name} (${clientServices[key].price})</li>
                            ))
                          }
                        </ul>
                      </article>
                    </div>
                  </div>
                </div>
                <div className="tile is-parent">
                  <article className="tile is-child notification is-danger">
                    <p className="title is-size-1">
                      <ClientTotal services={clientForPayment.services} />
                    </p>
                    <p className="subtitle is-size-4">
                      Total
                    </p>
                  </article>
                </div>
              </div>
            </section>
            <footer className="modal-card-foot">
              <button className="button is-danger">Mark as paid</button>
              <button className="button" onClick={() => this.closePaymentModal()}>Cancel</button>
            </footer>
          </div>
        </div>
      )
    )
  }
}

const mapDispatchToProps = (dispatch) => ({
  actionClosePaymentModal: () => { dispatch(actionClosePaymentModal()) },
});

const mapStateToProps = state => ({
  isPaymentModalOpen: state.clientsState.isPaymentModalOpen,
  clientForPayment: state.clientsState.clientForPayment
});

export default connect(mapStateToProps, mapDispatchToProps)(PaymentModal);