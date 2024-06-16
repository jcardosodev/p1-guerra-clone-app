import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';

const BottomBar: React.FC = () => {
  return (
    <View style={styles.bottomBar}>
      <TouchableOpacity style={styles.bottomBarItem}>
        <Image source={{ uri: 'https://cdn-icons-png.flaticon.com/512/25/25694.png'}} style={styles.logo} />
        <Text>Home</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomBarItem}>
        <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTeujOaRWnmiTkG15-RkZrieVZ_JKumVf1CPQ&s'}} style={styles.logo} />
        <Text>Services</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.bottomBarItem}>
        <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/021/079/672/non_2x/user-account-icon-for-your-design-only-free-png.png'}} style={styles.logo} />
        <Text>Account</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BottomBar;

const styles = StyleSheet.create({
  bottomBar: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    padding: 10,
    marginTop: 75,
    borderTopWidth: 3,
    borderColor: '#ccc',
    backgroundColor: '#fff',
  },
  bottomBarItem: {
    alignItems: 'center',
  },
  logo: {
    width: 50,
    height: 50,
    resizeMode: 'contain',
    marginBottom: 2,
  },
});
