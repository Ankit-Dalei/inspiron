import { Dimensions, StyleSheet } from "react-native";
const { width } = Dimensions.get('window');
const cardMargin = 8;
const numColumns = 1;
const numColumns2 = 2;
const cardWidth = (width / numColumns) - cardMargin * 2;
const cardWidth2 = (width / numColumns2) - cardMargin * 2;
const inputwidth = width - numColumns * 150;
export const cardStyle = StyleSheet.create({
  searchRow: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 12,
    paddingHorizontal: 12,
    marginTop: 10,
  },
  
  input: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 10,
    borderRadius: 20,
    borderWidth: 1,
    borderColor:'#000000',
    fontSize: 16,
    marginRight: 10,
  },
  card: {
    backgroundColor: '#fff',
    marginBottom: 12,
    width: cardWidth,
    margin: cardMargin,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  card2: {
    backgroundColor: '#fff',
    marginBottom: 12,
    width: cardWidth2,
    margin: cardMargin,
    padding: 16,
    borderRadius: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 6,
  },
  company: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  duration: {
    fontSize: 14,
    color: '#555',
    marginBottom: 4,
  },
  date: {
    fontSize: 12,
    color: '#999',
  },
});