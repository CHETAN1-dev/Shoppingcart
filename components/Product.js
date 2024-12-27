import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  SafeAreaView,
} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {addTocart,remove_to_cart} from './Redux/Action';

const Product = props => {
  const items = props.items;
  const dispatch = useDispatch();
  const cartItem = useSelector(state => state.cart || []);
  const [isAdded, setisAdded] = useState(false);
  const handleAddtoCart = () => {
    dispatch(addTocart(items));
  };
  const handleRemovetocart = ()=> {
  dispatch(remove_to_cart(items.name))
  }
  useEffect(() => {
    let res= cartItem.filter((element)=>{
      return element.name === items.name 
    });
    if (res.length){
      setisAdded(true)
    }else{
      setisAdded(false)
    }
  }, [cartItem]);

  return (
    <SafeAreaView>
      <View
        style={{padding: 10, borderBottomColor: 'black', borderBottomWidth: 2}}>
        <Text style={{fontSize: 24}}>{items.name}</Text>
        <Text style={{fontSize: 15}}>{items.color}</Text>
        <Text style={{fontSize: 15}}>{items.price}</Text>
        <Image source={items.image} style={styles.image} />
        {isAdded ? (
          <Button
            title="Remove to Cart"
            onPress={() => handleRemovetocart(items)}
            style={styles.Button}
          />
        ) : (
          <Button
            title="Add to Cart"
            onPress={() => handleAddtoCart(items)}
            style={styles.Button}
          />
        )}
      </View>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  productcontainer: {
    margin: 10,
    padding: 10,
    borderWidth: 1,
    bordercolor: '#ccc',
    borderRadius: 5,
  },
  image: {
    width: 100,

    height: 100,
    alignItems: 'flex-end',
  },
  Button: {
    backgroundColor: '#f0c14b',
  },
});

export default Product;
