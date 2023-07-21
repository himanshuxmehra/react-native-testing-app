import { StyleSheet, Text, View,
    Image,
    FlatList,
    PermissionsAndroid,
    Platform,
    TouchableOpacity,
    ScrollView,
} from 'react-native'
import React, { useCallback } from 'react'
import {useEffect, useState} from 'react';

import {CameraRoll, PhotoIdentifier} from '@react-native-camera-roll/camera-roll';
import { getDBConnection, createTable, getMediaItems, saveMediaItems } from '../services/local-database-service';
import { FlatGrid } from 'react-native-super-grid';

import { NativeStackScreenProps} from '@react-navigation/native-stack';
import { RootStackParamList } from '../src/App';
import { useNavigation } from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack'

type imageDetailProp = NativeStackScreenProps<RootStackParamList,'ImageDetail'>;

export default function Gallery({navigation}:any) {
    const [data, setData] = useState<PhotoIdentifier[]>();
  
  useEffect(() => {
    askPermission();
  }, []);

  const getPhotos = () => {
    CameraRoll.getPhotos({
      first: 50,
      assetType: 'Photos',
    })
      .then(res => {
        setData(res.edges);
      })
      .catch(error => {
        console.log(error);
      });
  };

  const askPermission = async () => {
    if (Platform.OS === 'android') {
      const result = await PermissionsAndroid.request(
        PermissionsAndroid.PERMISSIONS.READ_EXTERNAL_STORAGE,
        {
          title: 'Permission Explanation',
          message: 'ReactNativeForYou would like to access your photos!',
          buttonPositive: 'Accept'
        },
      );
      if (result !== 'granted') {
        console.log('Access to pictures was denied');
        return;
      } else {
        getPhotos();
      }
    } else {
      getPhotos();
      console.table(data)
    }
  };
  
  //db service
  

    return (
        <View>
          {/* <ScrollView>
            {
            data?.map((item,i) => 

              
            )
            }
          </ScrollView> */}
          <FlatGrid
            itemDimension={125}
            data={data}
            spacing={4}
            renderItem={({ item,index }) => (
              <TouchableOpacity onPress={()=> 
                navigation.push("ImageDetail", {
                    imageUri:item.node.image.uri
                })}>
              <Image
              style={{
                width: '100%',
                height: 125,
                borderRadius: 3,

              }}
              source={{uri: item.node.image.uri}}
              key={index}
            />
            </TouchableOpacity>
          )}
          />
        </View>
      );
}

const styles = StyleSheet.create({

  image: {

  }

})

