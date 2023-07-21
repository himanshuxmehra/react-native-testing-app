import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome6';


interface NavigationIconProps {
  route: string;
  isFocused: boolean;
}

const NavigationIcon = ({route, isFocused}: NavigationIconProps) => {
  const renderIcon = (route: string, isFocues: boolean) => {
    let height: number = 20;
    let width: number = 20;

    switch (route) {
      case 'home':
        return isFocues ? (
          <Icon
            name="image"
            style={{
              position: 'relative',
              height: 50,
              width: 50,
              backgroundColor: '#000',
              fontSize: 40,
              justifyContent: 'center',
              alignContent: 'center',
            }}
            color="#182C61"
          />
        ) : (
          <Icon
            name="image"
            style={{
              position: 'relative',
              height: 50,
              width: 50,
              backgroundColor: '#000',
              fontSize: 40,
              justifyContent: 'center',
              alignContent: 'center',
            }}
            color="#182C61"
          />
        );
      case 'folder':
        return isFocues ? (
          <Icon
            name="folder"
            style={{
              position: 'relative',
              height: 50,
              width: 50,
              backgroundColor: '#000',
              fontSize: 40,
              justifyContent: 'center',
              alignContent: 'center',
            }}
            color="#182C61"
          />
        ) : (
          <Icon
            name="folder"
            style={{
              position: 'relative',
              height: 50,
              width: 50,
              backgroundColor: '#000',
              fontSize: 40,
              justifyContent: 'center',
              alignContent: 'center',
            }}
            color="#182C61"
          />
        );
      case 'camera':
        return isFocues ? (
          <Icon
            name="camera"
            style={{
              position: 'relative',
              height: 50,
              width: 50,
              backgroundColor: '#000',
              fontSize: 40,
              justifyContent: 'center',
              alignContent: 'center',
            }}
            color="#182C61"
          />
        ) : (
          <Icon
            name="camera"
            style={{
              position: 'relative',
              height: 50,
              width: 50,
              backgroundColor: '#000',
              fontSize: 40,
              justifyContent: 'center',
              alignContent: 'center',
            }}
            color="#182C61"
          />
        );
      case 'notes':
        return isFocues ? (
          <Icon
            name="clipboard"
            style={{
              position: 'relative',
              height: 50,
              width: 50,
              backgroundColor: '#000',
              fontSize: 40,
              justifyContent: 'center',
              alignContent: 'center',
            }}
            color="#182C61"
          />
        ) : (
          <Icon
            name="clipboard"
            style={{
              position: 'relative',
              height: 50,
              width: 50,
              backgroundColor: '#000',
              fontSize: 40,
              justifyContent: 'center',
              alignContent: 'center',
            }}
            color="#182C61"
          />
        );
      case 'account':
        return isFocues ? (
          <Icon
            name="user"
            style={{
              position: 'relative',
              height: 50,
              width: 50,
              backgroundColor: '#000',
              fontSize: 40,
              justifyContent: 'center',
              alignContent: 'center',
            }}
            color="#182C61"
          />
        ) : (
          <Icon
            name="user"
            style={{
              position: 'relative',
              height: 50,
              width: 50,
              backgroundColor: '#000',
              fontSize: 40,
              justifyContent: 'center',
              alignContent: 'center',
            }}
            color="#182C61"
          />
        );
      default:
        break;
    }
  };

  return <View>{renderIcon(route, isFocused)}</View>;
};

const styles = StyleSheet.create({});

export default NavigationIcon;
