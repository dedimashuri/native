import React, {useState} from 'react';
import {styles} from './styles';
import {MenuIcon} from './src/components';
import { Icon } from 'react-native-elements'



import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  Text,
  View,
  Image,
} from 'react-native';

const App = () => {
  
  const [data] =useState([
    {
      name:'account-balance-wallet',
      color:'purple',
      text:'wallet',
    },
    {
      name:'',
      color:'',
      text:'',
    },
    {
      name:'',
      color:'',
      text:'',
    },
    {
      name:'',
      color:'',
      text:'',
    },
    {
      name:'',
      color:'',
      text:'',
    },
    {
      name:'',
      color:'',
      text:'',
    },
    {
      name:'',
      color:'',
      text:'',
    },
    {
      name:'',
      color:'',
      text:'',
    }]);

  const renderMenu = () => {
    return data.map(( val, index) => {
      return <MenuIcon key={index} data ={val} />;
    })
  }
  
  return ( 
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor= "black" barStyle="light-content"/>
      <View style={{flex: 1, marginTop: 20 }}>
        <Text style = {{fontSize: 12, color:'#0bbd9a', marginHorizontal: 10}}>
          Mashuri, Inc
        </Text>
        <View style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          marginVertical: 10,
          paddingHorizontal: 10,
        }}> 
          <View>
            <Text style = {{fontSize:30, color: '#0bbd9a', fontWeight: '700'}}>
              Dedi Mashuri
            </Text>
            <Text style = {{color: '#0bbd9a'}}>General Manager</Text>
          </View>
          <View>
            <Image style = {{height: 70, width: 70, borderRadius: 35}}
            source={{
              uri: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxAHBhASBxIVFRMSFRURERYQDxYOEBMWFhEXGRYVFxcYHyggGBomGxMWITEiJikrLi4uFx8zODMsNyg5MDABCgoKDg0OGxAQGi0dICYtLS0rKy0tKy0tKy0tLTcrLS0tLS0tKy0tLS0tLSstNy0rKy0tKys3LS0tLSsrNzcrLf/AABEIAMIBAwMBIgACEQEDEQH/xAAbAAEAAwEBAQEAAAAAAAAAAAAABAUGAwIBB//EADcQAQABAgQCBggFBAMAAAAAAAABAgMEBREhMXESQVFhkbETIjIzgaHB0RQ0coLhUmKi8CNCQ//EABgBAQEBAQEAAAAAAAAAAAAAAAACAwEE/8QAHhEBAQEBAAMAAwEAAAAAAAAAAAECEQMhMRNBURL/2gAMAwEAAhEDEQA/AP0QB6WQAAAAAAAAAAD7EazsD4J+Hyu5d9v1Y7958E+1lNuj29auc6R8k3cjvKoXWjD13PYpqn9s6NHaw9Fr3dMRyjfxdUfkV/lmqsFdopmaqJ0jeeCOtM6vV+k6O8U6fCqVWvNtiaAKcAAAAAAAAAAAAAAAAAAAAAAAdLFqb96KaOM/LtkHvCYWrFV6UcOuZ4QvsLg6MNHqRv1zPH+HSxZixaim3wj597ow1rrSTgAl0AB4u2qb1ExcjWJUmPy6cPHSt709fbHPuXxO8bqmrHLOskLDNMF+Hq6Vr2Z6v6Z+yvbS9RYAOuAAAAAAAAAAAAAAAAAAAAC0yKjW5XVPVERHx1+yrW+Q/wDp+36p38dn1bAMGgAAAAADnftxds1U1dcMtDWslwa+NOgBogAAAAAAAAAAAAAAAAAAAAXGQ+xXzjyU65yL3dfOPJG/is/VoAxWAAAAAAMnPFrGTni08adPgDVAAAAAAAAAAAAAAAAAAAAAuMh9ivnHlKnng1dFMUU+pERyjRnu+lZegGSwAAAAABk54tYoc4tU2sTHo4iPV6o065aeO+06QAGqAAAAAAAAAAAAAAAAAAAABqbFXTsUz2xE/Jll9lGIi5hopnjTt8OqWfknpWU8BksAAAAAAUOdVdLG8qYjzn6r2qYpp1q4RxZnF3fT4mqqOuduUbR8oX457TpxAbIAAAAAAAAAAAAAAAAAAAAEzKq+hjqe/WmfD7xCG92q/RXIqp6pifBy+47GqHmiqK6ImnhMaw9PO0AAAAAAQM5r6ODmP6piPr9FCss7u9O/FMf9Y1nnP8eatbYnpGvoAtIAAAAAAAAAAAAAAAAAAAAAC1yjG9HS3c/bP0XDOZZT0sdRzmfCJaNjue2mQBDoAA44u/8AhrE1Tvp5zwdkHOPyM8483Z9Koq65uVzNfGZ1l5B6GQAAAAAAAAAAAAAAAAAAAAAAD3Zo9Lepp7ZiPGQTMljXG8qZn5x918827cW6dLcREdz0w1e1pJwAS6AAIOc/kp5wnPkxrxdl5RkxKzK1FnGVRRw2mPiit5esgB0AAAAAAAAAAAAAAAAAAASMNg68T7uNu2do/lzvBHWGT4f0uI6U8KN/jPBLsZRTTP8AzTNXdHqx91hbt026dLcREd0aI1ufpUy9AMlgAAAAAKnPLG0Vx+mr6KhrKqYqjSqNee6DiMqt3Z1t+rPdw8Gmd89VNihE3EZZcs70x0o/t4+CG0llS+AOuAAAAAAAAAAAAA+p+Fyuu7vd9WP8p+HU5bI6r03D5bcve1HRj+7j4LnD4OjD+7jftnefF3Z3yfxUyhYbLbdneqOlPbVw8E0EW9UAOAAAAAAAAAAA4X8Jbv8AvaY17eE+MO4CnxGUTG+HnXuq2nxVt21VZq0uxMT3tU810Rcp0uREx3xqubqbllBc4rKIq3w06d07x49SqvWqrNel2NJ/3h2tJqVNnHMBTgAAAAAA6WLNV+50bUb/ACjvlzaPLsPGHw0ds71fb4J1rjsnXnBZfTho1nertnq5diYDG3rQAcAAAAAAAAAAAAAAAAAAB4u26btOlyImO97AUOZYD8NPStez4zTP2QGsrpiumYq4TtLMYmz6C/VTPVO3LqbY130jUcgFpAAAAJ4NaDLyKyAM1gAAAAAAAAAAAAAAAAAAAAACjzv81H6Y85fBePqdfFeA2QAA/9k='
            }}/>
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
            marginBottom: 15,
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

              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>1</Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              height: 60,
              width: 200,
              marginHorizontal: 5,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>2</Text>
          </View>
          <View
            style={{
              backgroundColor: 'white',
              height: 60,
              width: 200,
              marginHorizontal: 5,
              borderRadius: 5,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Text>3</Text>
          </View>
        </ScrollView>
      </View>
      <View
        style={{
          flex: 1,
          backgroundColor: 'white',
          borderTopRightRadius: 20,
          borderTopLeftRadius: 20,
        }}></View>
    </SafeAreaView>
  );
};

export default App;
