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

export default function Gallery() {
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
          <ScrollView>
            {
            data?.map((item,i) => 

              <Image
                style={{
                  width: '33%',
                  height: 150,
                }}
                source={{uri: item.node.image.uri}}
                key={i}
              />
            )
            }
          </ScrollView>
        </View>
      );
}

const styles = StyleSheet.create({

  image: {

  }

})

