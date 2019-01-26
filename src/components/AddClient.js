import React from 'react';

class AddClient extends React.Component {
  render (){
    return (
      <div>
        <a class="button is-info">
          <span class="icon is-small">
            <i class="fas fa-plus-square"></i>
          </span>
          <span>New Client</span>
        </a>
      </div>
    )
  }
}

export default AddClient;
