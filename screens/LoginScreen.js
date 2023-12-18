import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import FontAwesome from 'react-native-vector-icons/FontAwesome';

const LoginScreen = () => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.customBlueButton}>
        <Text style={[styles.whiteText, styles.boldText, styles.mediumText, styles.centerText]}>Use Email or Username</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.blackBorderButton}>
        <FontAwesome name="google" size={20} color="black" style={styles.icon} />
        <Text style={[styles.blackText, styles.boldText, styles.mediumText, styles.centerText]}>Sign in with Google</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.facebookButton}>
        <FontAwesome name="facebook" size={20} color="white" style={styles.icon} />
        <Text style={[styles.flexBox ,styles.whiteText, styles.boldText, styles.mediumText, styles.centerText]}>Sign in with Facebook</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.blueOutlineButton}>
        <Text style={[styles.blueText, styles.mediumText, styles.centerText]}>Create an Account</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginBottom: 35,
  },
  customBlueButton: {
    backgroundColor: '#025dcf',
    padding: 11,
    margin: 10,
    width: '90%',
    borderRadius: 35,
  },
  blackBorderButton: {
    flexDirection: 'row',
    borderWidth: 1,
    borderColor: 'black',
    padding: 11,
    margin: 10,
    width: '90%',
    borderRadius: 35,
    alignItems: 'center',
  },
  facebookButton: {
    flexDirection: 'row',
    backgroundColor: '#1877f2',
    paddingVertical: 11,
    paddingHorizontal: 20,
    margin: 10,
    width: '90%',
    borderRadius: 35,
    justifyContent: 'center',
  },
  blueOutlineButton: {
    borderWidth: 1,
    borderColor: 'blue',
    padding: 11,
    margin: 10,
    width: '90%',
    borderRadius: 35,
  },
  whiteText: {
    color: 'white',
  },
  blackText: {
    color: 'black',
  },
  blueText: {
    color: 'blue',
  },
  boldText: {
    fontWeight: 'bold',
  },
  mediumText: {
    fontSize: 20,
  },
  centerText: {
    textAlign: 'center',
  },
  icon: {
    // marginRight: 10,
    flex: 1,
    alignContent: 'center',
  },
  flexBox: {
    flex: 12,
  },
});

export default LoginScreen;
