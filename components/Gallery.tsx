import {
  StyleSheet,
  Text,
  View,
  Image,
  FlatList,
  PermissionsAndroid,
  Platform,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useCallback} from 'react';
import {useEffect, useState} from 'react';

import {
  CameraRoll,
  PhotoIdentifier,
} from '@react-native-camera-roll/camera-roll';

import {FlatGrid} from 'react-native-super-grid';

import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootStackParamList} from '../src/App';
import {useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

type imageDetailProp = NativeStackScreenProps<
  RootStackParamList,
  'ImageDetail'
>;

export default function Gallery({navigation}: any) {
  const [data, setData] = useState<PhotoIdentifier[]>();
  const [isUploaded,setIsUploaded] = useState({});
  useEffect(() => {
    askPermission();
  }, []);
  var obj = {};

  const getPhotos = () => {
    CameraRoll.getPhotos({
      first: 50,
      assetType: 'Photos',
    })
      .then(res => {
        data?.map(image => {
          let formData = new FormData();
          formData.append('Content-Type', 'image/jpg');
          formData.append('userId', 'imagejpg');
          formData.append('folderId', 'ssss');
          formData.append('image', {
            userId: 'testing',
            folderID: 'testfolder',
            name: image.node.image.filename, // You can use any name here
            uri: image.node.image.uri,
          });

          fetch('http://localhost:8080/upload', {
            method: 'POST',
            headers: {
              'Content-Type': 'multipart/form-data',
            },
            body: formData,
          }).then(response => {
            fetch('http://localhost:8080/isUploaded', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: {
              filename:image.node.image.filename 
            },
          }).then(response => {
            obj[image.node.image.filename]=true;
            console.log()
            setIsUploaded(obj)
          });
          });
        });
        setData(res.edges);

        console.log(isUploaded)

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
          buttonPositive: 'Accept',
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
      console.table(data);
    }
  };

  //db service

  return (
    <View style={styles.containerGallery}>
      <FlatList
        data={data}
        horizontal={false}
        numColumns={2}
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() =>
              navigation.push('ImageDetail', {
                imageUri: item.node.image.uri,
                imgIndex: index,
                data: data,
              })
            }>
            <Image
              style={[styles.image]}
              source={{uri: item.node.image.uri}}
              key={index}
            />
            <Text style={styles.whitetext}>{isUploaded[item.node.image.filename]}</Text>
            {isUploaded[item.node.image.filename] == true ? (
              <Text style={styles.whitetext}>{isUploaded[item.node.image.filename]}Uploaded</Text>
            ) : (
              <Text style={styles.whitetext}>{isUploaded[item.node.image.filename]}Not</Text>
            )}
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  image: {
    height: 200,
    borderRadius: 22,
    left: 0,
    marginHorizontal: 10,
    width: 200,
  },
  whitetext: {
    color: 'white',
  },
  containerGallery: {
    flex: 1,
    flexDirection: 'row',
  },
});
