import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { StackNavigator, addNavigationHelpers } from 'react-navigation';


import HomeScreen from '../screens/HomeScreen';

export const AppNavigator = StackNavigator({
    home: {
      screen: HomeScreen
    }
  }, {
    headerMode: 'none',
  });

const AppNavigatorView = ({ dispatch, nav }) => {
    return (
      <AppNavigator
        navigation={addNavigationHelpers({ dispatch, state: nav })}
      />
    );
};

AppNavigatorView.propTypes = {
  dispatch: PropTypes.func.isRequired,
  nav: PropTypes.object.isRequired,
};

function select(store) {
  return {
    nav: store.nav
  }
}

export default connect(select)(AppNavigatorView);
