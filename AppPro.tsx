import React from "react";

import { 
    SafeAreaView, 
    Text, 
    View,
    StyleSheet,
    useColorScheme 
} from "react-native";


function AppPro():JSX.Element{
    const isDarkMode = useColorScheme()==='dark';
    return (
        <SafeAreaView>
        <View style={styles.container}>
          <Text style={isDarkMode? styles.whiteText : styles.darkText}>
            Hello Worldsssss!
          </Text>
        </View>
      </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 0,
        alignItems: 'center'
    },
    whiteText: {
        color:'#FFFFFF'
    },
    darkText: {
        color:'#000'
    },
})

export default AppPro;