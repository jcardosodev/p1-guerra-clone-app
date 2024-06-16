import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    backgroundColor: 'white',
  },
  input: {
    marginBottom: 12,
  },
  suggestionsContainer: {
    marginBottom: 16,
  },
  suggestionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  suggestions: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  suggestionItem: {
    alignItems: 'center',
  },
  icon: {
    width: 50,
    height: 50,
  },
  iconShare: {
    width: 200,
    height: 150,
  },
  promoContainer: {
    padding: 16,
    backgroundColor: '#e0ffe0',
    borderRadius: 8,
    marginBottom: 16,
  },
  promoText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  moreWaysContainer: {
    marginBottom: 16,
  },
  moreWaysTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  moreWays: {
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  moreWayItem: {
    alignItems: 'center',
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
    marginBottom: 2,
  },
});
