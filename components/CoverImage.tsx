import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const CoverImage = () => {
    const data = {
        coverImageUri:'https://images.unsplash.com/photo-1505236858219-8359eb29e329',
        profileImageUri:'https://images.unsplash.com/photo-1573273787173-0eb81a833b34',
    }
  return (
    <View>
    <View>
      <Image style={styles.coverImage} resizeMode='cover' source={{
        uri:data.coverImageUri
      }}/>
    </View>
    <View>
        <Image style={styles.profileImage} resizeMode='cover' source={{
        uri:data.profileImageUri
      }}/>
    </View>
    </View>
  )
}

export default CoverImage

const styles = StyleSheet.create({
    coverImage: {
        height:256,
        width:'100%',
    },
    profileImage:{
        height:128,
        width:128,
        marginTop:-64,
        alignSelf: 'center',
        borderRadius:100,
    }
})