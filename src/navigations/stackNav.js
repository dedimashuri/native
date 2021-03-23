import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {View, Text, Button} from 'react-native';
import HomeTab from './HomeTab';
const Stack = createStackNavigator();

function ReimbursementScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Reimbursement Screen</Text>
      <Button title="ke home" onPress={() => navigation.navigate('Home')} />
      <Button title="reim push" onPress={() => navigation.push('Reim')} />
      <Button
        title="reim navigate"
        onPress={() => navigation.navigate('Reim')}
      />
      <Button title="go Back navigate" onPress={() => navigation.goBack()} />
    </View>
  );
}

function ReqScreen({navigation, route}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Req Screen {route.params?.nama} </Text>
      <Button title="ke home" onPress={() => navigation.navigate('Home')} />
      <Button
        title="reim navigate"
        onPress={() => navigation.navigate('Reim')}
      />
      <Button
        title="news navigate"
        onPress={() =>
          navigation.navigate('HomeTab', {screen: 'News', params: {id: 3}})
        }
      />
    </View>
  );
}

function WalletScreen({navigation}) {
  return (
    <View style={{flex: 1, alignItems: 'center', justifyContent: 'center'}}>
      <Text>Wallet Screen</Text>
      <Button title="ke home" onPress={() => navigation.navigate('Home')} />
      <Button title="wallet push" onPress={() => navigation.push('wallet')} />
      <Button
        title="wallet navigate"
        onPress={() => navigation.navigate('Wallet')}
      />
      <Button title="go Back navigate" onPress={() => navigation.goBack()} />
    </View>
  )
}

const StackNav = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="HomeTab"
        component={HomeTab}
        options={{headerShown: false}}
      />
      <Stack.Screen name="Reim" component={ReimbursementScreen} />
      <Stack.Screen name="wallet" component={WalletScreen} />
      <Stack.Screen
        name="Req"
        component={ReqScreen}
        initialParams={{nama: 'jhon'}}
        options={({route}) => ({
          title: route.params.nama,
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTintColor: '#fff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        })}
      />
    </Stack.Navigator>
  );
};

export default StackNav;
