import React from 'react';
import { StyleSheet, View } from 'react-native';
import { LoginScreen } from './LoginScreen';

export const AuthNavigator: React.FC = () => {
  return (
    <View style={styles.container}>
      <LoginScreen />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
