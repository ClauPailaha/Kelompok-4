import React from 'react';
import {
  StyleSheet,
  View,
  ScrollView,
} from 'react-native';
import Regis from './Src/Components/Registration/Regis';
import List from './Src/Components/Userlist/List';

const App = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Regis/>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
});

export default App;