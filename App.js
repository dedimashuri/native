import React, {useState} from 'react';
import {styles} from './styles';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Button,
  Image,
  TextInput,
} from 'react-native';

const App = () => {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor= "#0bbd9a" barStyle="light-content"/>
      <View>
        <Text >dedi</Text>
      </View>
    </SafeAreaView>
  )
}
export default App;
