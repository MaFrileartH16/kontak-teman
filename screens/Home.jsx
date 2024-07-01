import React from 'react';
import { View, StyleSheet} from 'react-native';
import { ContactList } from '../components/ContactList.jsx'

export const HomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ContactList navigation={navigation} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 16,
  }
});