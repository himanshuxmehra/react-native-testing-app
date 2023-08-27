import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CoverImage from '../../components/CoverImage'
import ProfileFeed from '../../components/ProfileFeed'
import StorageInfo from '../../components/StorageInfo'

const Account = () => {
  return (
    <View>
      <Text>Account</Text>
      <CoverImage/>
      <ProfileFeed/>
      <StorageInfo/>
    </View>
  )
}

export default Account

const styles = StyleSheet.create({})