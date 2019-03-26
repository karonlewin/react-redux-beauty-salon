import React from 'react';
import ReactDOM from 'react-dom';
import { Service } from '../components/Service';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { expect } from '../utils/chai';
import { generateService } from '../utils/testData';

configure({ adapter: new Adapter() });

describe('FilterableProductTable', () => {
  const service = generateService();
  const identity = el => el

  let wrapper;

  beforeEach(() => {
    wrapper = shallow(
      <Service service={service} connectDragSource={identity}/>
    )
  });

  it('renders the service name and price', () => {
    console.log(wrapper.render());
    expect(wrapper.contains(service.name)).to.equal(true);
    expect(wrapper.contains(service.price)).to.equal(true);
  });

});
