import 'react-native';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import {LoginScreen} from '../LoginScreen';
import { FormValidationMessage } from 'react-native-elements';


configure({ adapter: new Adapter() });

const initialState = {
  user: {
    error: 'Invalid email or password',
    isLoading: false
  }
};


it('should render a error info', () => {
  let error = 'Invalid email or password';
  let wrapper = shallow(<LoginScreen error={error}/>);
  expect(wrapper.find('FormValidationMessage').contains(error)).toBe(true);
});
