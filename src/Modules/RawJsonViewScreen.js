import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text, ScrollView } from 'react-native'

export const RawJsonViewScreen = ({ route, navigation }) => {
    const { item } = route.params;
    return (
        <ScrollView>
            <Text>{JSON.stringify(item, null, "       ")}</Text>
        </ScrollView>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RawJsonViewScreen)
