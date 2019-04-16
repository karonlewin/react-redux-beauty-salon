import React from 'react';
import ReactDOM from 'react-dom';
import Service from '../components/Service';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { expect } from '../utils/chai';
import { generateService } from '../utils/testData';

configure({ adapter: new Adapter() });

describe('Service', () => {
  // Stub the React DnD connector functions with an identity function
  let connectDragSourceStub = el => el;
  let wrapper;
  const service = generateService();
  const ServiceComponent = Service.DecoratedComponent;

  beforeEach(() => {
    wrapper = shallow(
      <ServiceComponent service={service} connectDragSource={connectDragSourceStub}/>
    )
  });

  it('renders the service title and price', () => {
    expect(wrapper.text()).to.have.string(service.name);
    expect(wrapper.text()).to.have.string(service.price);
  });


});
