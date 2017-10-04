import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View, } from 'react-native';

export default class UIAutomationTest extends Component {

    render() {
        return (
            <View style={styles.container}>
                <TouchableOpacity
                    onPress={() => console.log('Button pressed')}
                    style={styles.ButtonStyle}
                    accessible={true}
                    accessibilityLabel="Hola"
                    testID="TouchButton"
                >
                    <Text style={{fontSize: 20, fontWeight: 'bold', color: 'white'}}>CLICK ME</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

UIAutomationTest.propTypes = {
    testID: View.propTypes.testID,
};

//Optional, just a best practice
UIAutomationTest.defaultProps = {
    testID: '',
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF',
    },
    ButtonStyle: {
        padding: 30,
        backgroundColor: 'orange',
        borderRadius: 10,
    }
});
