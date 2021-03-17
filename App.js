import React, {useState} from 'react';

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

import {
  Colors,
  DebugInstructions,
  Header,
  LearnMoreLinks,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';


const App: () => Node = () => {
  const  [input, setinput] = useState('');

  // //component didmount di hooks
  // useEffect(() => {
    // function yang didalam return adalah component will unmount
  //   return () => {};
  // }, []);


  // //component didupdate
  // useEffect(() => {},[]);


  return (
    <ScrollView style={styles.container}>
      <View style={styles.kotak}>
        <Text>
          dedi
        </Text>
      </View>
      <View style={[styles.kotak, styles.kotak1]}>
        <Text>
          mashuri
        </Text>
      </View>
      <View>
        <Image
          style={{width:400, height:300, borderRadius: 10,}}
          source={
            {
              uri:'https://d5ibtax54de3q.cloudfront.net/eyJidWNrZXQiOiJraWNrYXZlbnVlLWFzc2V0cyIsImtleSI6InByb2R1Y3RzLzIxMjA4L2QxZmIxMzcwY2M2OTljZmNiODJmNWYwOWFmN2Y0MTBiLnBuZyIsImVkaXRzIjp7InJlc2l6ZSI6eyJ3aWR0aCI6NDAwfSwid2VicCI6eyJxdWFsaXR5Ijo1MH19fQ=='
            }
          }
        />
        <TextInput
          style= {{borderWidth: 1, width: 400}}
          value={input}
          onChangeText={text => setinput(text)}
          placeholder="isi text"
        />
      </View>
      <View>
        <Image
          style={{width:400, height:300, borderRadius: 10,}}
          source={require
            (
                './image/foto.png'
            )
          }
        />
      </View>
    </ScrollView>
    )
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'steelblue'
    },

    kotak: {
      backgroundColor: 'yellow',
      height: 350,
      alignItems: 'center',
      justifyContent: 'center'
    },

    kotak1: {
      backgroundColor: 'pink'
    }
  
});

export default App;
