import React, {useEffect, useState} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {useSelector} from 'react-redux';

const Header = () => {
  const cartData = useSelector(state => state.cart || []);
  const [cartItem, setcartItem] = useState(0);

  useEffect(() => {
    setcartItem(cartData.length);
  }, [cartData]);

  return (
    <View styles={styles.container}>
      <Text style={{fontSize: 30, textAlign: 'right', backgroundColor: 'grey'}}>
        <View style={{backgroundColor:'red', height:40, width:40 , borderRadius:15}}>
          <Text style={{fontSize:30, textAlign:'center'}}>{cartItem}</Text>
        </View>
      </Text>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
export default Header;
