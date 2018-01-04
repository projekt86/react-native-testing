// @flow
import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import { Button } from 'react-native-elements';


export const styles = StyleSheet.create({
    buttonStyle: {
        width: 250,
        margin: 20,
        backgroundColor: '#07dda8',
    },
    disabledStyle: {
        backgroundColor: 'rgba(7, 221, 168, .2)',
    },
});

const ActionButton = ({ title, loading, disabled, onPress }) => {
    return (
        <Button
            testID={'loginButton'}
            buttonStyle={styles.buttonStyle}
            backgroundColor={styles.backgroundColor}
            disabledStyle={styles.disabledStyle}
            color={disabled ? 'rgba(255, 255, 255, .2)' : 'white'}
            title={title}
            large
            loading={loading}
            disabled={disabled}
            onPress={onPress}
        />
    );
};

ActionButton.propTypes = {
    title: PropTypes.string.isRequired,
    loading: PropTypes.bool,
    disabled: PropTypes.bool,
    onPress: PropTypes.func.isRequired,
};

ActionButton.defaultProps = {
    loading: false,
    disabled: false,
};


export default ActionButton;
