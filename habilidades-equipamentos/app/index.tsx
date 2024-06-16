import { View, Text, TouchableOpacity, Image } from 'react-native';
import { TextInput } from 'react-native-paper';
import { styles } from '@/app/styles';
import BottomBar from '@/components/BottomBar';

const Index = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: 'https://s3.eu-west-2.amazonaws.com/standfirst-designweek-production/uploads/2013/02/PMU-logo-purple.jpg' }}
        style={styles.logo}
      />
      <TextInput
        label="Where to?"
        mode="outlined"
        style={styles.input}
      />
      <View style={styles.suggestionsContainer}>
        <Text style={styles.suggestionsTitle}>Suggestions</Text>
        <View style={styles.suggestions}>
          <TouchableOpacity style={styles.suggestionItem}>
            <Image source={{ uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdFN33C5_pnr5KdjpKQs5IM_k4PeJoo4jnQg&s' }} style={styles.icon} />
            <Text>Ride</Text>
          </TouchableOpacity>
          <TouchableOpacity style={styles.suggestionItem}>
            <Image source={{ uri: 'https://cdn-icons-png.freepik.com/512/4007/4007506.png' }} style={styles.icon} />
            <Text>Send</Text>
          </TouchableOpacity>
        </View>
      </View>
      <TouchableOpacity style={styles.promoContainer}>
        <Text style={styles.promoText}>Your promo is expiring!</Text>
        <Text>Request a ride</Text>
      </TouchableOpacity>
      <View style={styles.moreWaysContainer}>
        <Text style={styles.moreWaysTitle}>More ways to use Pick me Up!</Text>
        <View style={styles.moreWays}>
          <TouchableOpacity style={styles.moreWayItem}>
            <Image source={{ uri: 'https://static.vecteezy.com/system/resources/previews/015/393/176/non_2x/online-car-rent-people-using-mobile-application-for-ordering-taxi-cab-or-car-sharing-woman-near-smartphone-screen-with-route-and-location-mark-on-a-city-map-vector.jpg' }}
             style={styles.iconShare} />
            <Text>Share a ride</Text>
          </TouchableOpacity>
        </View>
        <BottomBar />
      </View>
    </View>
  );
};

export default Index;
