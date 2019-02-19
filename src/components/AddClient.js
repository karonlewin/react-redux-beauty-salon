import React from 'react';
import { connect } from 'react-redux';

class AddClient extends React.Component {
  addClient = () => {
    let text = this.input.value.trim();
    if (text.length > 0){
      this.props.dispatch({type: 'ADD_CLIENT', client: text})
    } else {
      alert('Client with no name?! Really?')
    }
    this.input.value = '';
  }

  render (){
    return (
      <div className="tile is-ancestor add-client">
        <div className="tile is-vertical">
          <div className="tile">
            <div className="tile is-parent is-vertical">
              <article className="tile is-child notification is-light is-bold">
                <div className="field">
                  <div className="control">
                    <input className="input is-danger" type="text" name="client-name"
                           placeholder="Enter client's name"
                           ref={node => {this.input = node;}}/>
                  </div>
                </div>
                <button className="button is-danger" onClick={this.addClient}>
                  <span className="icon is-small">
                    <i className="fas fa-heart"></i>
                  </span>
                  <span>Hello beauty!</span>
                </button>
              </article>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => ({
  clientInput: state.clientInput
});

export default connect(mapStateToProps)(AddClient);
