import React, { useCallback } from 'react';
import {
  Alert,
  Button,
  Linking,
  StyleSheet,
  View,
  Text,
  SafeAreaView,
} from 'react-native';
import { Component } from 'react';
import {
  Platform,
  StatusBar,
  TouchableOpacity,
  ImageBackground,
  Image,
} from 'react-native';
import { BrowserRouter as Router, Link } from 'react-router-dom';

const supportedURL = 'https://mars.nasa.gov/mars2020/mission/where-is-the-rover/';
const unsupportedURL = 'https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?earth_date=2015-6-3&api_key=DEMO_KEY'
const OpenURLButton = ({ url, children }) => {
  const handlePress = useCallback(async () => {
    const supported = await Linking.canOpenURL(url);
    if (supported) {
      await Linking.openURL(url);
    }
  }, [url]);

  return <Button title={children} onPress={handlePress} color="#922ce6" />;
};

const Separator = () => <View style={styles.separator} />;
const App = () => {
  return (
    <SafeAreaView style={styles.container}>
     <ImageBackground source = {require("./assets/marsbackground.png")} style = {styles.backgroundImage}>
      <View>
        <Text style={styles.title}>For Getting More Information about Us:</Text>
        <OpenURLButton url={supportedURL}>
          Click to Find Perseverance!
        </OpenURLButton>
      </View>
      <Separator />
      <View>
        <OpenURLButton url={unsupportedURL}>Click to See Past Rover Visuals!</OpenURLButton>
      </View>
      </ImageBackground>
    </SafeAreaView>
  );
};


const styles = StyleSheet.create({
   container: {
    flex: 1,
  },
  title: {
    textAlign: 'center',
    marginVertical: 10,
  },
  droidSafeArea: {
    marginTop: Platform.OS === 'android' ? StatusBar.currentHeight : 0,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
  routeCard: {
    flex: 0.25,
    marginLeft: 50,
    marginRight: 50,
    marginTop: 50,
    borderRadius: 30,
    backgroundColor: 'white',
  },
  titleBar: {
    flex: 0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    fontSize: 40,
    fontFamily: 'Courier New',
    align: 'center',
    alignContent: 'center',
    fontWeight: 'bold',
    color: 'white',
  },
  routeText: {
    fontSize: 25,
    fontFamily: 'Courier New',
    fontWeight: 'bold',
    color: 'black',
    marginTop: 90,
    paddingLeft: 14,
  },
  bgDigit: {
    position: 'absolute',
    color: 'rgb(245, 149, 117)',
    fontSize: 80,
    fontFamily: 'Courier New',
    right: 15,
    bottom: -15,
    zIndex: -1,
  },
  iconImage: {
    position: 'absolute',
    height: 200,
    width: 200,
    resizeMode: 'contain',
    right: 20,
    top: -80,
  },
});
export default App;
