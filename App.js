import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Button,
  ScrollView,
  Image,
  SafeAreaView,
} from 'react-native';
import Product from './components/Product';
import Header from './components/Header';


const App = () => {
  const shoes = [
    {
      name: 'Nike',
      color: 'red',
      price: 25000,
      image: require('../Shoppingcart/assets/images/download (1).jpeg'),
    },
    {
      name: 'Puma',
      color: 'black',
      price: 30000,
      image: require('../Shoppingcart/assets/images/download (3).jpeg'),
    },
    {
      name: 'Adidas',
      color: 'White',
      price: 25000,
      image: require('../Shoppingcart/assets/images/download (2).jpeg'),
    },
  ];
  return (
    <View styles={styles.container}>
      <Header />
      <ScrollView>
        <SafeAreaView>
          {shoes.map(item => (
            <Product items={item} />
  
          ))}
        </SafeAreaView>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
