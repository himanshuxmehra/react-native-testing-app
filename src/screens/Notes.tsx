import { SafeAreaView, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'

import {database} from '../../services/local-database-service'

const Notes = () => {
  const postsCollection = database.get('media')
  useEffect(()=>{const newPost = database.get('media').create(post => {
    post.title = 'New post'
    post.uri = 'Lorem ipsum...'
  })})
  return (
    <SafeAreaView>
    <View>
      <Text>Notes</Text>
    </View>
    </SafeAreaView>
  )
}

export default Notes

const styles = StyleSheet.create({})