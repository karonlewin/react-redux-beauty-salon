import React from 'react';
import { connect } from 'react-redux';

class AddClient extends React.Component {
  inputRef = React.createRef();

  addClient = () => {
    let text = this.inputRef.current.value.trim();
    if (text.length > 0){
      this.props.addClient(text);
    } else {
      alert('Client with no name?! Really?')
    }
  }

  handleChange = event => {
    let text = this.inputRef.current.value.trim();
    this.props.updateClientInput(text);
  }

  render (){
    return (
      <div class="tile is-ancestor add-client">
        <div class="tile is-vertical">
          <div class="tile">
            <div class="tile is-parent is-vertical">
              <article class="tile is-child notification is-light is-bold">
                <div class="field">
                  <div class="control">
                    <input className="input is-danger" type="text" name="client-name" placeholder="Enter client's name" value={this.props.clientInput} onChange={this.handleChange} ref={this.inputRef}/>
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
