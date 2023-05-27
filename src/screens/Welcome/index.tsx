import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'


const Welcome = () => {
  return (
    
        <SafeAreaView style={styles.container}>
            <View>
                <Text>Welcome</Text>
            </View>
        </SafeAreaView>
  )
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#1483C2',
        alignItems: 'center',

    }
})

export default Welcome