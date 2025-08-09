import React, { useRef, useState } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper";
import { useAuth } from "../../contexts/AuthContext";

import Icon from "../../assets/icons";
import Avatar from "../../components/Avatar";
import Header from "../../components/Header";
import Input from "../../components/input";
import { theme } from "../../constants/theme";
import { hp } from "../../helpers/common";

const CloseFriends = () => {
    const { user } = useAuth();
    const searchRef = useRef("");
    const [selectedUsers, setSelectedUsers] = useState([]); 

    const toggleUserSelection = (userId) => {
        setSelectedUsers(prevSelected =>
            prevSelected.includes(userId)
                ? prevSelected.filter(id => id !== userId)
                : [...prevSelected, userId]
        );
    };

    const users = [
        {
            id: 1,
            username: 'Samuele Mamini',
            nickname: 'Mamo',
            image: user?.image,
        },
        {
            id: 2,
            username: 'Elia Savini',
            nickname: 'Savo',
            image: user?.image,
        },
        {
            id: 3,
            username: 'Filippo Cenni',
            nickname: 'Cen',
            image: user?.image,
        },
        {
            id: 4,
            username: 'Lorenzo Quercioli',
            nickname: 'Querc',
            image: user?.image,
        },
    ];

    return (
        <ScreenWrapper bg='white'>
            <Header title="Close Friends" mb={30} />
            <View style={{ paddingHorizontal: 16, marginBottom: 15 }}>
                <Input
                    icon={<Icon name="search" size={26} strokeWidth={1.6} />}
                    placeholder="Search"
                    onChangeText={value => searchRef.current = value}
                />
            </View>
            <ScrollView style={styles.listContainer}>
                {users.map(user => {
                    const isSelected = selectedUsers.includes(user.id);

                    return (
                        <TouchableOpacity
                            key={user.id}
                            style={styles.userCard}
                            onPress={() => toggleUserSelection(user.id)}
                        >
                            <Avatar
                                uri={user?.image}
                                size={hp(9)}
                                rounded={theme.radius.xxl}
                            />
                            <View style={styles.textContainer}>
                                <Text style={styles.username}>{user.username}</Text>
                                <Text style={styles.nickname}>{user.nickname}</Text>
                            </View>
                            <Icon
                                name={isSelected ? "check" : "plus"}
                                size={20}
                                strokeWidth={2}
                                color={theme.colors.dark}
                            />
                        </TouchableOpacity>
                    );
                })}
            </ScrollView>
        </ScreenWrapper>
    );
};

export default CloseFriends;

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
