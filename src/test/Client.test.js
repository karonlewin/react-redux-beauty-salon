import React from 'react';
import ReactDOM from 'react-dom';
import Client from '../components/Client';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { expect } from '../utils/chai';
import { generateClient } from '../utils/testData';

configure({ adapter: new Adapter() });

describe('FilterableProductTable', () => {
  const client = generateClient();
  let wrapper = shallow( <Client client={client}/> )

  it('renders the client', () => {
    expect(wrapper.text()).to.have.string(client.name);
  });

});
