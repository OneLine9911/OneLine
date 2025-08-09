import React, { useEffect, useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper";
import { useAuth } from "../../contexts/AuthContext";
import { fetchPendingRequest } from "../../services/friendService";

import Icon from "../../assets/icons";
import Avatar from "../../components/Avatar";
import Header from "../../components/Header";
import { theme } from "../../constants/theme";
import { hp } from "../../helpers/common";

const FriendRequests = () => {
    const { user } = useAuth();
    const searchRef = useRef("");
    const [selectedUsers, setSelectedUsers] = useState([]);
    const [requests, setRequests] = useState([]);


    useEffect(() => {
        const loadRequests = async () => {
            const friends = await fetchPendingRequest(user?.id);
            if (friends) {
                console.log('friends: ', friends);
                setRequests(friends);
            }
        };
        loadRequests();
    }, []);


    const toggleUserSelection = async (userId) => {
        setSelectedUsers(prevSelected =>
            prevSelected.includes(userId)
                ? prevSelected.filter(id => id !== userId)
                : [...prevSelected, userId]
        );
    };

    return (
        <ScreenWrapper bg='white'>
            <Header title="Friend Requests" mb={30} />
            <ScrollView style={styles.listContainer}>
                {requests.length === 0 ? (
                    <View style={{ padding: 20, alignItems: 'center' }}>
                        <Text style={{ fontSize: 16, color: 'gray' }}>
                            Non hai richieste al momento
                        </Text>
                    </View>
                ) : (
                    requests.map(req => {
                        const sender = req.sender;
                        const isSelected = selectedUsers.includes(sender.id);

                        return (
                            <TouchableOpacity
                                key={sender.id}
                                style={styles.userCard}
                                onPress={() => toggleUserSelection(sender.id)}
                            >
                                <Avatar
                                    uri={sender.image}
                                    size={hp(9)}
                                    rounded={theme.radius.xxl}
                                />
                                <View style={styles.textContainer}>
                                    <Text style={styles.username}>{sender.name}</Text>
                                    <Text style={styles.nickname}>
                                        {sender.nickname || ''}
                                    </Text>
                                </View>
                                <Icon
                                    name={isSelected ? "check" : "plus"}
                                    size={20}
                                    strokeWidth={2}
                                    color={theme.colors.dark}
                                />
                            </TouchableOpacity>
                        );
                    })
                )}
            </ScrollView>
        </ScreenWrapper>
    );
};

export default FriendRequests;

const styles = StyleSheet.create({
    listContainer: {
        paddingHorizontal: 16,
    },
    userCard: {
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 15,
        padding: 10,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
        gap: 15
    },
    textContainer: {
        flex: 1,
    },
    username: {
        fontSize: 18,
        fontWeight: 'bold',
    },
    nickname: {
        fontSize: 14,
        color: 'gray',
    },
});
