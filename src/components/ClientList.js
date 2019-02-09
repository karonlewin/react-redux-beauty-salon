import React from 'react';
import ClientServices from './ClientServices';
import { connect } from 'react-redux';

class ClientList extends React.Component {
  render (){
    function sortClients(a, b) {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();

      let comparison = 0;
      if (nameA > nameB) {
        comparison = 1;
      } else if (nameA < nameB) {
        comparison = -1;
      }
      return comparison;
    }

    return (
      <React.Fragment>
        {this.props.clients.sort(sortClients).map((client, index) => (
          <ClientServices client={client}/>
        ))}
      </React.Fragment>

    )
  }
}

const mapStateToProps = state => ({
  clients: state.clients
});

export default connect(mapStateToProps)(ClientList);
