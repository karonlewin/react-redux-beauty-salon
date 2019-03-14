import React from 'react';
import ReactDOM from 'react-dom';
import { Service } from '../components/Service';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { expect } from '../utils/chai';
import { generateService } from '../utils/testData';

configure({ adapter: new Adapter() });

describe('FilterableProductTable', () => {
  let wrapper;
  const service = generateService();

  // beforeEach(() => {
    wrapper = shallow(
      <Service service={service}/>
    )
  // });

  xit('renders the service', () => {
    // expect(wrapper.contains(serviceText)).to.equal(true);
    expect(wrapper.render()).to.have.string(service.name);
    // expect($('div.MyDive').text()).to.have.string('Some text');
  });

});
