import React from 'react';
import ReactDOM from 'react-dom';
import { ServiceList } from '../components/ServiceList';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { expect } from '../utils/chai';
import { generateServiceList } from '../utils/testData';

configure({ adapter: new Adapter() });

describe('FilterableProductTable', () => {
  let wrapper;
  const services = generateServiceList();

  // beforeEach(() => {
    wrapper = shallow(
      <ServiceList filteredServices={services}/>
    )
  // });

  xit('renders all services', () => {
    const serviceText = 'Basic Facial';
    // expect(wrapper.contains(serviceText)).to.equal(true);
    expect(wrapper.render()).to.have.string(services[0].name);
    // expect($('div.MyDive').text()).to.have.string('Some text');
  });

});
