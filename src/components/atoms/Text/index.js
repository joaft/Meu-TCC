import Reac from "react";
import {Text, StyleSheet} from 'react-native';

export const CustomText  = () => {
    return (
        <Text style ={styles.titleText}> </Text>
    )
}

const styles = StyleSheet.create({
    titleText: {
      color: '#0000',
      fontSize: 24,
      fontWeight: 'bold',
      marginTop:50,
    }
  
  });