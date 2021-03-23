import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  Image,
  Dimensions,
  View,
  Platform,
  RefreshControl,
  ToastAndroid,
  Alert,
  BackHandler,
  TouchableWithoutFeedback,
} from 'react-native';
import {Icon, Badge, ListItem} from 'react-native-elements';
import {styles} from '../styles';
import {MenuIcon} from '../components';

const windowHeight = Dimensions.get('screen').height;

const Home = props => {
  const [data] = useState([
    {
      name: 'account-balance-wallet',
      color: 'purple',
      text: 'wallet',
    },
    {
      name: 'article',
      color: 'salmon',
      text: 'article',
    },
    {
      name: 'add-shopping-cart',
      color: 'teal',
      text: 'cart',
    },
    {
      name: 'shop',
      color: '#ca2c37',
      text: 'shop',
    },
    {
      name: 'book',
      color: 'steelblue',
      text: 'book',
    },
    {
      name: 'bug-report',
      color: 'black',
      text: 'bug',
    },
    {
      name: 'credit-card',
      color: 'sandybrown',
      text: 'card',
    },
    {
      name: 'favorite',
      color: 'red',
      text: 'love',
    },
  ]);

  const [back, setback] = useState(0);

  const backAction = () => {
    if (back === 0) {
      setback(1);
      ToastAndroid.show('1 click back again if you wanna back', 3000);
    } else {
      BackHandler.exitApp();
    }
    console.log(back);

    return true;
  };

  useEffect(() => {
    BackHandler.addEventListener('hardwareBackPress', backAction);

    return () =>
      BackHandler.removeEventListener('hardwareBackPress', backAction);
  }); 

  const OnReimbursePress = () => {
    props.navigation.push('Reim');
  };

  const OnWalletPress = () => {
    props.navigation.push('wallet');
  };

  const renderMenu = () => {
    return data.map((val, index) => {
      return <MenuIcon key={index} data={val} />;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ca2c37" barStyle="light-content" />
      <ScrollView>
        <View style={{height: windowHeight / 2, marginTop: 20}}>
          <Text style={{fontSize: 12, color: 'white', marginHorizontal: 10}}>
            Dundler Mifflin, Inc
          </Text>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginVertical: Platform.OS === 'android' ? 10 : 5,
              paddingHorizontal: 10,
            }}>
            <View>
              <Text style={{fontSize: 30, color: 'white', fontWeight: '700'}}>
                Michael Scott
              </Text>
              <Text style={{color: 'white'}}>General Manager</Text>
            </View>
            <View>
              <Image
                style={{height: 70, width: 70, borderRadius: 35}}
                source={{
                  uri:
                    'https://upload.wikimedia.org/wikipedia/en/d/dc/MichaelScott.png',
                }}
              />
            </View>
          </View>
          <View
            style={{
              height: 150,
              backgroundColor: 'white',
              borderRadius: 5,
              flexWrap: 'wrap',
              flexDirection: 'row',
              marginTop: 10,
              marginBottom: 25,
              marginHorizontal: 10,
            }}>
            {renderMenu()}
          </View>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <TouchableWithoutFeedback onPress={OnReimbursePress}>
              <View
                style={{
                  backgroundColor: 'white',
                  height: 60,
                  width: 200,
                  marginHorizontal: 5,
                  flexDirection: 'row',
                  borderRadius: 5,
                }}>
                <View
                  style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text style={{color: 'gray'}}>Rp</Text>
                </View>
                <View style={{flex: 5, justifyContent: 'center'}}>
                  <Text style={{fontSize: 12}}>Request</Text>
                  <Text>Reimbursement</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback
              onPress={() => props.navigation.navigate('Req', {nama: 'james'})}>
              <View
                style={{
                  backgroundColor: 'white',
                  height: 60,
                  width: 200,
                  marginHorizontal: 5,
                  flexDirection: 'row',
                  borderRadius: 5,
                }}>
                <View
                  style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon name="calendar-today" color="gray" />
                </View>
                <View style={{flex: 5, justifyContent: 'center'}}>
                  <Text style={{fontSize: 12}}>Request</Text>
                  <Text>Time Off</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
            <TouchableWithoutFeedback onPress={OnWalletPress}>
              <View
                style={{
                  backgroundColor: 'white',
                  height: 60,
                  width: 200,
                  marginHorizontal: 5,
                  flexDirection: 'row',
                  borderRadius: 5,
                }}>
                <View
                  style={{
                    flex: 2,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Icon name="alarm" color="gray" />
                </View>
                <View style={{flex: 5, justifyContent: 'center'}}>
                  <Text style={{fontSize: 12}}>Request</Text>
                  <Text>Overtime</Text>
                </View>
              </View>
            </TouchableWithoutFeedback>
          </ScrollView>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            borderTopRightRadius: 10,
            borderTopLeftRadius: 10,
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingHorizontal: 14,
              paddingVertical: 10,
              justifyContent: 'space-between',
            }}>
            <Text style={{fontSize: 19, fontWeight: '600'}}>Announcement</Text>
            <Text style={{marginTop: 5, color: 'steelblue'}}>View All</Text>
          </View>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>New Family member</ListItem.Title>
              <ListItem.Subtitle>Pam Beesly</ListItem.Subtitle>
            </ListItem.Content>
            <Badge containerStyle={{marginTop: -15, marginRight: -10}} />
            <ListItem.Subtitle style={{marginTop: -15}}>
              12 August 2021
            </ListItem.Subtitle>
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>New Family member</ListItem.Title>
              <ListItem.Subtitle>Pam Beesly</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Subtitle style={{marginTop: -15}}>
              12 August 2021
            </ListItem.Subtitle>
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>New Family member</ListItem.Title>
              <ListItem.Subtitle>Pam Beesly</ListItem.Subtitle>
            </ListItem.Content>
            <ListItem.Subtitle style={{marginTop: -15}}>
              12 August 2021
            </ListItem.Subtitle>
          </ListItem>
          <ListItem bottomDivider>
            <ListItem.Content>
              <ListItem.Title>New Family member</ListItem.Title>
              <ListItem.Subtitle>Pam Beesly</ListItem.Subtitle>
            </ListItem.Content>

            <ListItem.Subtitle style={{marginTop: -15}}>
              12 August 2021
            </ListItem.Subtitle>
          </ListItem>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
