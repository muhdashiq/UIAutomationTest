import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, TouchableOpacity, View, } from 'react-native';
import UIAutomationTest from './UIAutomationTest'

const App = () => {
  return (
      <UIAutomationTest testID='UIAutomationTest'/>
  )
};

AppRegistry.registerComponent('UIAutomationTest', () => App);
