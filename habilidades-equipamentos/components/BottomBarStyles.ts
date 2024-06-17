import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
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