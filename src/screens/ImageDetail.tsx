import { Button, Image, Platform, StatusBar, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useState } from 'react'
import ImageView from "react-native-image-viewing";
// Navigation Imports
import { NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParamList } from '../App';
import { useNavigation } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import { ImageSource } from 'react-native-image-viewing/dist/@types';
type imageDetailProp = NativeStackScreenProps<RootStackParamList,'ImageDetail'>;

const ImageDetail = ({route}:imageDetailProp) => {
    const {data,imageUri,imgIndex} = route.params;
    console.log(data)
    var imageurls: ImageSource[] | { uri: any; }[]=[];
    data.map((item:any)=>{
      var temp = {
        uri:item.node.image.uri
      }
      console.log(item)
      imageurls.push(temp)
    })

    const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();
    const [visible, setIsVisible] = useState(true);
    return (
        <View style={styles.root}>
        
        
        {/* <Text>ImageDetail</Text> */}

        <ImageView
        images={imageurls}
        imageIndex={imgIndex}
        visible={visible}
        onRequestClose={() => {
          setIsVisible(false);
          navigation.goBack()
        }}
      />
        </View>
    )
}

export default ImageDetail


const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#000",
    ...Platform.select({
      android: { paddingTop: StatusBar.currentHeight },
      default: null,
    }),
  },
  about: {
    flex: 1,
    marginTop: -12,
    alignItems: "center",
    justifyContent: "center",
  },
  name: {
    textAlign: "center",
    fontSize: 24,
    fontWeight: "200",
    color: "#FFFFFFEE",
  },
});