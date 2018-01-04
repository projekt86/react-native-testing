import 'react-native';
import React from 'react';
import Adapter from 'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import ActionButton from '../ActionButton';

configure({ adapter: new Adapter() });

const defProps = {
    title: 'Submit',
    onPress: () => {},
    loading: false,
    disabled: false,
};

describe('rendering', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<ActionButton {...defProps} />);
    })
    it('should renders correctly', () => {
        expect(wrapper.find('Button')).toHaveLength(1);
    })
    it('should render a label', () => {
        expect(wrapper.find('Button').prop('title')).toEqual('Submit');
    })
    it('should be loading false', () => {
        expect(wrapper.find('Button').prop('loading')).toBe(false);
    })
    it('should be loading true', () => {
        wrapper.setProps({ loading: true });
        expect(wrapper.find('Button').prop('loading')).toBe(true);
    })
    it('should be disabled false', () => {
        expect(wrapper.find('Button').prop('disabled')).toBe(false);
    })
    it('should be disabled true', () => {
        wrapper.setProps({ disabled: true });
        expect(wrapper.find('Button').prop('disabled')).toBe(true);
    })
})

describe('click the button', () => {
    let props;
    let wrapper;
    beforeEach(() => {
        props = { title: 'SingIn', onPress: jest.fn() };
        wrapper = shallow(<ActionButton {...props} />);
    })
    it('should call the onPress callback', () => {
        wrapper.find('Button').prop('onPress')();
        expect(props.onPress).toHaveBeenCalledTimes(1);
    })
    it('should not call the onPress callback', () => {
        wrapper.setProps({ disabled: true });
        wrapper.find('Button').prop('onPress')();
        expect(props.onPress).toHaveBeenCalledTimes(1);
    })
})
