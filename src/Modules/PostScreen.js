import React, { Component, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { View, Text } from 'react-native'
import { getPosts } from '../actions/PostAction'
export const PostScreen = ({ getPosts, posts }) => {

    // const [post, setPost] = useState([])

    useEffect(() => {
        getPosts()
    }, [])

    useEffect(() => {
        alert(JSON.stringify(posts, null, "      "))
    }, [posts])

    return (
        <View style={{ flex: 1 }}>
            <Text>Post Screen</Text>
        </View>
    )
}

const mapStateToProps = (state) => ({
    posts: state.post.posts
})

const mapDispatchToProps = {
    getPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen)
