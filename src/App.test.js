import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {enzyme, shallow, configure } from "enzyme"
import jest from "jest-mock";
import Adapter from 'enzyme-adapter-react-16';

configure({adapter: new Adapter()});

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
  const wrapper = shallow(<App  />);
  expect(wrapper).toMatchSnapshot();
});

it('should render json object data on mount', () => {
  const mockFunction = jest.fn()
  const wrapper = shallow(<App  />);
  const instance = wrapper.instance();
  instance.componentDidMount = mockFunction;
  expect(mockFunction).toHaveBeenCalledTimes(0);

})
