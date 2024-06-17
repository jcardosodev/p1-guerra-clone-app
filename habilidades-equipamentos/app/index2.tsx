import { View, Text, TouchableOpacity, Image } from 'react-native';
import { TextInput, Button } from 'react-native-paper';
import { styles2 } from './styles2';

const Index2 = () => {
  return (
    <View style={styles2.container}>
      <Image
        source={{ uri: 'https://s3.eu-west-2.amazonaws.com/standfirst-designweek-production/uploads/2013/02/PMU-logo-purple.jpg' }}
        style={styles2.logo}
      />
      <View style={styles2.loginContainer}>
        <TextInput
          label="Email"
          mode="outlined"
          style={styles2.input}
        />
        <TextInput
          label="Password"
          mode="outlined"
          style={styles2.input}
          secureTextEntry
        />
        <TouchableOpacity>
          <Text style={styles2.forgotPassword}>Did you forget your password?</Text>
        </TouchableOpacity>
        <Button mode="contained" onPress={() => {}} style={styles2.loginButton}>
          Log in
        </Button>
        <Text style={styles2.or}>OR</Text>
        <Button icon="apple" mode="outlined" onPress={() => {}} style={styles2.socialButton}>
          Sign in with Apple
        </Button>
        <Button icon="facebook" mode="outlined" onPress={() => {}} style={styles2.socialButton}>
          Login with Facebook
        </Button>
        <Button icon="google" mode="outlined" onPress={() => {}} style={styles2.socialButton}>
          Login with Google
        </Button>
      </View>
    </View>
  );
};

export default Index2;
