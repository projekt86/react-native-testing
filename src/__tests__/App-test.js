import 'react-native';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import { App } from '../App';

configure({ adapter: new Adapter() });

describe('should render specific screen', () => {
    it('should render LoginScreen', () => {
      let wrapper = shallow(<App />);
      expect(wrapper.find('LoginScreen')).toMatchSnapshot();
    });
    it('should render Home', () => {
      let wrapper = shallow(<App isLoggedIn={false} />);
      expect(wrapper.find('View')).toMatchSnapshot();
    });
});
