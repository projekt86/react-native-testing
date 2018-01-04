import React from 'react';
import { View, StatusBar, StyleSheet } from 'react-native';
import { connect } from 'react-redux';
import AppNavigatorView from './navigators/AppNavigator';
import { NavigationActions } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';

// export for tests
export class App extends React.Component {

  render() {

    if (!this.props.isLoggedIn) {
      return <LoginScreen />;
    }

    return (
      <View style={styles.container}>
        <StatusBar
          translucent
          barStyle="light-content"
          backgroundColor="transparent"
        />
        <AppNavigatorView />
      </View>
    );
  }

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#343642',
  }
});

function select(store) {
  return {
    isLoggedIn: store.user.isLoggedIn,
  }
}


export default connect(select)(App);
