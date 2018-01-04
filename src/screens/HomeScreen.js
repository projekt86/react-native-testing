/**
* projetk86
* @flow
*/


import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Button }from 'react-native-elements';
import { connect } from 'react-redux';
import { logout } from '../actions';


class HomeScreen extends Component {

  componentWillUnmount() {
    console.log('home unmouted');
  }

  logOut = () => {
    this.props.logout();
  }

  render() {
    const { name } = this.props;

    return (
      <View style={styles.container} testID={'homeScreen'}>
        <Text style={styles.title}>{`Welcome ${name}!`}</Text>
        <Button
          testID={'logoutButton'}
          title="Logout"
          onPress={this.logOut}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343642',
    paddingTop: 70,
    justifyContent: 'center',
    alignItems: 'center'
  },
  title: {
    color: 'white',
    fontSize: 18,
    margin: 20,
  }
});

const mapStateToProps = ({ user }) => {
  const { name } = user;
  return { name };
};

const mapDispatchToProps = (dispatch) => {
  return {
    logout: () => {
      dispatch(logout());
    }
  };
}



export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);
