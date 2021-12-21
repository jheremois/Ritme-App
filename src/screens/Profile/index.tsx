import React, { useState, useEffect, useContext } from "react";
import { Pressable, Text } from "react-native";
import { userPlacehold } from "@src/helpers/consts";
import { ProfileInfo } from "@src/components/ProfileInfo";
import { getCurrentUser } from "@src/services/User.services";
//import I18n from '../../locales/locals';

const Profile = ()=>{

    const [username, setUsername] = useState("")

    const getMe = ()=> getCurrentUser().then((res)=> {
        console.log(res?.data.response[0])
        setUsername(res?.data.response[0].user_name)
      }).catch((err)=>{
        console.log(err)
      }) 

    useEffect(()=>{
      getMe()    
    })
  
    return(
        <>
          <ProfileInfo username={username} image={userPlacehold} />
        </>
    )
}

export default Profile

/*

import React, {Component} from 'react';
import {Text, View, TouchableOpacity, StyleSheet, Alert} from 'react-native';
import I18n from '../../locales/locals';
class Profile extends Component {
  state: {
    changeLanguage: 'english',
  };
  heading = () => {
    return (
      <View style={styles.mainTitle}>
        <Text>Multi Language in React Native</Text>
      </View>
    );
  };
  button = () => {
    return (
      <TouchableOpacity
        style={styles.button}
        onPress={() => {
          Alert.alert(
            'Language Selection',
            'Multi language support',
            [
              {
                text: 'French',
                onPress: () => {
                  I18n.locale = 'fr-Us';
                  this.setState({changeLanguage: 'English'});
                },
              },
              {
                text: 'English',
                onPress: () => {
                  I18n.locale = 'en-Us';
                  this.setState({changeLanguage: 'English'});
                },
              },
              {
                text: 'Arabic',
                onPress: () => {
                  I18n.locale = 'ar-Us';
                  this.setState({changeLanguage: 'arabic'});
                },
              },
              {
                text: 'Cancel',
                onPress: () => {
                  console.log('Cancel Pressed');
                },
                style: 'cancel',
              },
            ],
            {cancelable: false},
          );
        }}>
        <Text>Click Change Language</Text>
      </TouchableOpacity>
    );
  };

  render() {
    return (
      <View style={styles.container}>
        {this.heading()}
        <View style={{flex: 2, width: '90%'}}>
          <Text style={styles.text}>{I18n.t('greeting')}</Text>
          <Text style={styles.text}>{I18n.t('title')}</Text>
          <Text style={styles.text}>{I18n.t('Message')}</Text>
          {this.button()}
        </View>
      </View>
    );
  }
}
export default Profile;

const styles = StyleSheet.create({
  container: {backgroundColor: '#F5FCFF', flex: 1, alignItems: 'center'},
  text: {
    paddingVertical: 5,
  },
  button: {
    backgroundColor: '#FF5733',
    paddingVertical: 20,
    alignSelf: 'center',
    marginVertical: 50,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  mainTitle: {
    flex: 1,
    justifyContent: 'center',
  },
});

*/