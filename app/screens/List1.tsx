import { NavigationProp } from '@react-navigation/native';
import React from 'react'
import { Button, StyleSheet, View } from 'react-native';
import { FIREBASE_AUTH } from '../../firebaseConfig';


interface RouterProps {
  navigation: NavigationProp<any, any>;
}

const List1 = ({navigation}: RouterProps) => {
  return (
    <View style={styles.container}>
      <Button onPress={() => navigation.navigate('details')} title="Open Details" />
      <Button onPress={()=> FIREBASE_AUTH.signOut()} title="Logout" />
    </View>
  );
}

export default List1

const styles = StyleSheet.create({
    container: {
        flex: 1, 
justifyContent: 'center',
alignItems: 'center'
    }
})