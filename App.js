import React, {useState, useEffect} from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  Image,
  TextInput,
  Dimensions,
  View,
  Button,
  Platform,
  RefreshControl,
  Switch,
  TouchableWithoutFeedback,
} from 'react-native';
import {Icon, Badge, ListItem} from 'react-native-elements';
import {styles} from './src/styles';
import {MenuIcon} from './src/components';

const windowWidth = Dimensions.get('screen').width;
const windowHeight = Dimensions.get('screen').height;
const wait = timeout => {
  return new Promise(resolve => setTimeout(resolve, timeout));
};
const App = () => {
  const [refreshing, setRefreshing] = React.useState(false);
  const onRefresh = React.useCallback(() => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  }, []);
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
  const [page, setpage] = useState('home');

  const onMenuPress = page => {
    setpage(page);
  };

  const renderMenu = () => {
    return data.map((val, index) => {
      return <MenuIcon key={index} data={val} />;
    });
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor="#ca2c37" barStyle="light-content" />
      <ScrollView
        refreshControl={
          <RefreshControl
            colors={['#ca2c37']}
            refreshing={refreshing}
            onRefresh={onRefresh}
          />
        }>
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
                James
              </Text>
              <Text style={{color: 'white'}}>General Manager</Text>
            </View>
            <View>
              <Image
                style={{height: 70, width: 70, borderRadius: 35}}
                source={{
                  uri:
                    'data:image/jpeg;base64,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',
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
      <View
        style={{
          backgroundColor: 'white',
          height: windowHeight / 15,
          flexDirection: 'row',
          paddingHorizontal: 5,
          alignItems: 'center',
          shadowColor: '#000',
          shadowOffset: {
            width: 0,
            height: 6,
          },
          shadowOpacity: 0.39,
          shadowRadius: 8.3,

          elevation: 13,
        }}>
        <TouchableWithoutFeedback onPress={() => onMenuPress('home')}>
          <View style={{width: '25%'}}>
            <Icon name="home" color={page === 'home' ? '#ca2c37' : '#c7c7c7'} />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 10,
                color: page === 'home' ? '#ca2c37' : '#c7c7c7',
              }}>
              Home
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => onMenuPress('news')}>
          <View style={{width: '25%'}}>
            <Icon
              name="message"
              color={page === 'news' ? '#ca2c37' : '#c7c7c7'}
            />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 10,
                color: page === 'news' ? '#ca2c37' : '#c7c7c7',
              }}>
              News
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => onMenuPress('books')}>
          <View style={{width: '25%'}}>
            <Badge
              value={99}
              badgeStyle={{
                position: 'absolute',
                right: 20,
                elevation: 10,
                backgroundColor: '#ca2c37',
              }}
              textStyle={{
                fontSize: 10,
              }}
            />
            <Icon
              name="book"
              color={page === 'books' ? '#ca2c37' : '#c7c7c7'}
            />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 10,
                color: page === 'books' ? '#ca2c37' : '#c7c7c7',
              }}>
              Books
            </Text>
          </View>
        </TouchableWithoutFeedback>
        <TouchableWithoutFeedback onPress={() => onMenuPress('users')}>
          <View style={{width: '25%'}}>
            <Icon
              name="account-circle"
              color={page === 'users' ? '#ca2c37' : '#c7c7c7'}
            />
            <Text
              style={{
                textAlign: 'center',
                fontSize: 10,
                color: page === 'users' ? '#ca2c37' : '#c7c7c7',
              }}>
              users
            </Text>
          </View>
        </TouchableWithoutFeedback>
      </View>
    </SafeAreaView>
  );
};

export default App;