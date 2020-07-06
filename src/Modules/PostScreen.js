import React, { Component, useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { View, Text, TouchableOpacity, StyleSheet, SafeAreaView, FlatList, ActivityIndicator } from 'react-native'
import { getPosts } from '../actions/PostAction'
import moment from 'moment'
export const PostScreen = ({ getPosts, posts, navigation }) => {
    let initialState = 0
    const [post, setPost] = useState([])
    const [pagination, setPagination] = useState(initialState)
    const [loading, setLoading] = useState(false)
    useEffect(() => {
        setInterval(function () {
            setPagination(pagination + 1)
        }, 10000);  // Periodically (every 10 seconds) poll for new posts
    }, [])

    useEffect(() => {
        setLoading(true)
        getPosts(pagination, (res, status) => {
            if (status) {
                setLoading(false)
            } else {
                setLoading(false)
            }
        })
    }, [pagination]) //this function will be called initially at pagination 0 and also called when pagination count increases

    useEffect(() => {
        if (posts?.hits?.length > 0) {
            setPost([...post, ...posts?.hits])
        }
    }, [posts])

    const Item = ({ item, index }) => {
        return (
            <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate('RawJsonViewScreen', { item: item })}
                style={[styles.item, { backgroundColor: index % 2 == 0 ? "#b2b2b2" : "white" }]}>
                <Text style={styles.title}>{item?.title}</Text>
                <Text style={{ marginTop: 10 }}>URL: {item?.url}</Text>
                <Text style={{ marginTop: 10 }}>Created At: {moment(item?.created_at).format('YYYY-MM-DD')}</Text>
                <Text style={{ marginTop: 10, fontStyle: "italic" }}>{moment(item?.created_at).startOf('hour').fromNow()}</Text>
            </TouchableOpacity>
        );
    }

    return (
        <SafeAreaView style={styles.container}>
            <View style={{ padding: 10 }}>
                <Text style={{ fontWeight: 'bold' }}>Total Post Count - {post?.length}</Text>
            </View>
            <FlatList
                data={post}
                renderItem={({ item, index }) => <Item item={item} index={index} />}
                keyExtractor={(item, index) => index.toString()}
                onEndReachedThreshold={1}
                onEndReached={(info) => setPagination(pagination + 1)}  // when end reached it will increase the pagination and the api will be called
                ListFooterComponent={() => {
                    return (
                        loading ?
                            <View style={{ marginVertical: 20 }}>
                                <ActivityIndicator size="large" />
                            </View>
                            : null
                    )
                }}
            />
        </SafeAreaView>
    )
}

const mapStateToProps = (state) => ({
    posts: state.post.posts
})

const mapDispatchToProps = {
    getPosts
}

export default connect(mapStateToProps, mapDispatchToProps)(PostScreen)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    item: {
        backgroundColor: '#f9c2ff',
        margin: 5,
        padding: 20,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,

        elevation: 5,
    },
    title: {
        fontSize: 18,
        fontWeight: 'bold'
    },
});