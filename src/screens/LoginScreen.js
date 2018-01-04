/**
* projetk86
* @flow
*/


import React, { Component } from 'react';
import { View, Text, StyleSheet, Platform } from 'react-native';
import PropTypes from 'prop-types';
import {
  FormLabel,
  FormInput,
  FormValidationMessage,
  Button
} from 'react-native-elements';
import { connect } from 'react-redux';

import ActionButton from '../components/ActionButton';
import { login } from '../actions';

const BACKGROUND_COLOR = '#343642',
  GREEN_COLOR = '#07dda8',
  GREEN_DISABLED_COLOR = 'rgba(7, 221, 168, .2)',
  TINT_COLOR = '#565a69',
  SEPARATOR_COLOR = '#272831';

type Props = {
  login: () => void,
  dispatch: (action: any) => Promise,
  error?: string,
  isLoading: boolean
};

type State = {
  email: string,
  password: string,
};

export class LoginScreen extends Component<Props, State> {

  state = {
    email: '',
    password: '',
  };


  onEmailChange = (email: string) => {
    this.setState({ email });
  };

  onPasswordChange = (password: string) => {
    this.setState({ password });
  };

  logIn = () => {
    this.setState({ isLoading: true });
    const { email, password } = this.state;
    this.props.login(email, password);
  }

  render() {
    const { email, password } = this.state;
    const { error, isLoading } = this.props;

    const signInButtonDisable = isLoading || email === '' || password === '';

    return (
      <View style={styles.container} testID={'loginScreen'}>
        <View style={styles.content}>
          <Text style={styles.title}>SIGN IN</Text>
          <View style={styles.form}>
            <FormLabel labelStyle={styles.formLabel}>Email</FormLabel>
            <FormInput
              testID={'emailInput'}
              inputStyle={styles.form}
              containerStyle={styles.cs}
              onChangeText={this.onEmailChange}
              value={email}
              underlineColorAndroid={GREEN_COLOR}
              autoCapitalize="none"
              autoCorrect={false}
              keyboardType="email-address"
              returnKeyType="next"
            />
            <FormLabel labelStyle={styles.formLabel}>Password</FormLabel>
            <FormInput
              testID={'passInput'}
              inputStyle={styles.form}
              containerStyle={styles.cs}
              onChangeText={this.onPasswordChange}
              value={password}
              secureTextEntry
              underlineColorAndroid={GREEN_COLOR}
              returnKeyType="go"
            />
          </View>
          <Button
            title="Forgot Password?"
            backgroundColor="transparent"
            color="#76777d"
          />
          <ActionButton
            title="SIGN IN"
            onPress={this.logIn}
            disabled={signInButtonDisable}
            loading={isLoading}
          />
          <FormValidationMessage testID={'error'} labelStyle={styles.loginError}>
            {error}
          </FormValidationMessage>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343642',
    paddingTop: 70
  },
  content: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start'
  },
  title: {
    fontSize: 18,
    color: 'rgba(255, 255, 255, 0.3)',
    marginBottom: 30,
    backgroundColor: 'transparent'
  },
  form: {
    width: Platform.OS === 'ios' ? '90%' : '100%'
  },
  formLabel: {
    color: '#565a69',
    backgroundColor: 'transparent'
  },
  errorLabel: {
    backgroundColor: 'transparent'
  },
  cs: {
    borderBottomColor: GREEN_COLOR
  },
  loginError: {
    backgroundColor: 'transparent',
    paddingTop: 30
  }
});

const mapStateToProps = ({ user }) => {
  const { error, isLoading } = user;
  return { error, isLoading };
}

const mapDispatchToProps = (dispatch) => {
  return {
    login: (email, password) => {
      dispatch(login(email, password));
    }
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
