import React from 'react';

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
      <div>
        <input type="text" name="client-name" value={this.props.clientInput} onChange={this.handleChange} ref={this.inputRef}/>
        <button className="button is-info" onClick={this.addClient}>
          <span className="icon is-small">
            <i className="fas fa-plus-square"></i>
          </span>
          <span>New Client</span>
        </button>
      </div>
    )
  }
}

export default AddClient;
