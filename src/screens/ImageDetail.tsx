import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

// Navigation Imports
import { NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
type imageDetailProp = NativeStackScreenProps<RootStackParamList,'ImageDetail'>;

const ImageDetail = ({route}:imageDetailProp) => {
    const {imageUri} = route.params;

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

    return (
        <View>
        <Button title='Close'
        onPress={()=> 
                navigation.goBack()
            }/>
        <TouchableOpacity onPress={()=> 
                navigation.goBack()}>
                    <Text style={styles.close}>
                    X
                    </Text>
        </TouchableOpacity>
        <Text>ImageDetail</Text>
        <Image source={{
        uri: imageUri
      }} style={styles.image}/>
        </View>
    )
}

export default ImageDetail


const styles = StyleSheet.create({
  image:{
    height: 280,
  },
  close:{
    fontSize: 15,
    margin: 10,
  }
})