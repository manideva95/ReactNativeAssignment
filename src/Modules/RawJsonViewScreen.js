import React, { Component } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'

export const RawJsonViewScreen = () => {
    return (
        <View>
            <Text>{JSON.stringify('some', null, "       ")}</Text>
        </View>
    )
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = {

}

export default connect(mapStateToProps, mapDispatchToProps)(RawJsonViewScreen)
