import AsyncStorage from '@react-native-async-storage/async-storage';

// Store data
export const storeData = async (key: string, value: any) => {
  try {
    await AsyncStorage.setItem(key, JSON.stringify(value));
    console.log('Data stored successfully!');
  } catch (err) {
    console.error('Error storing data', err);
  }
};

// Read data
export const readData = async (key: string) => {
  try {
    const jsonValue = await AsyncStorage.getItem(key);
    return jsonValue != null ? JSON.parse(jsonValue) : null;
  } catch (err) {
    console.error('Error reading data', err);
    return null;
  }
};

// Usage
await storeData('user', { name: 'Ankit', age: 25 });
const user = await readData('user');
console.log(user);
