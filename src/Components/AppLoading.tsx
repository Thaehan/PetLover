import {View, StyleSheet, ActivityIndicator} from 'react-native';
import React from 'react';

export function AppLoading() {
  return (
    <View style={styles.container}>
      <ActivityIndicator size={'large'} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
