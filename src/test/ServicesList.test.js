import React from 'react';
import ReactDOM from 'react-dom';
import { ServicesList } from '../components/ServicesList';
import { configure, shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16'
import { expect } from '../utils/chai';
import { generateServiceList, initialStateStore } from '../utils/testData';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';

configure({ adapter: new Adapter() });

describe('ServicesList', () => {
  // Stub the React DnD connector functions with an identity function
  let connectDragSourceStub = el => el;
  let wrapper;
  const services = generateServiceList();
  const ServicesListComponent = ServicesList.DecoratedComponent;

  const initialState = initialStateStore;
  const mockStore = configureStore();

  beforeEach(() => {
    wrapper = mount(
      <Provider store={mockStore(initialState)}>
        <ServicesList filteredServices={services} className={'post-list-wrapper'} connectDragSource={connectDragSourceStub}/>
      </Provider>
    )
  });

  it('renders all services', () => {
    expect(wrapper.find('.services-list')).to.have.lengthOf(1);
    expect(wrapper.find('Connect(DragSource(Service))')).to.have.lengthOf(5);
  });

});
