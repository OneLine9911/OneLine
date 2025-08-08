import React from "react";
import { ScrollView, StyleSheet, Text, View } from "react-native";
import ScreenWrapper from "../../components/ScreenWrapper";
import { useAuth } from "../../contexts/AuthContext";

import Avatar from "../../components/Avatar";
import Header from "../../components/Header";
import { theme } from "../../constants/theme";
import { hp } from "../../helpers/common";

const CloseFriends = () => {

    const { user } = useAuth();

    const users = [
        {
            id: 1,
            username: 'Samuele Mamini',
            nickname: 'Mamo',
            image: user?.image, // URL di esempio
        },
        {
            id: 2,
            username: 'Elia Savini',
            nickname: 'Savo',
            image: user?.image, // URL di esempio
        },
        {
            id: 3,
            username: 'Filippo Cenni',
            nickname: 'Cen',
            image: user?.image, // URL di esempio
        },
        {
            id: 4,
            username: 'Lorenzo Quercioli',
            nickname: 'Querc',
            image: user?.image, // URL di esempio
        },
    ];

    return (
        <ScreenWrapper bg='white'>
            <Header title="Close Friends" mb={30} />
            <ScrollView style={styles.listContainer}>
                {users.map(user => (
                    <View key={user.id} style={styles.userCard}>
                        <Avatar
                            uri={user?.image}
                            size={hp(9)}
                            rounded={theme.radius.xxl}
                        />
                        <View style={styles.textContainer}>
                            <Text style={styles.username}>{user.username}</Text>
                            <Text style={styles.nickname}>{user.nickname}</Text>
                        </View>
                    </View>
                ))}
            </ScrollView>
        </ScreenWrapper>
    );
};

export default CloseFriends;

const styles = StyleSheet.create({
    header: {
        fontSize: 24,
        fontWeight: 'bold',
        textAlign: 'center',
        marginVertical: 20,
    },
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
    userImage: {
        width: 50,
        height: 50,
        borderRadius: 25,
        marginRight: 15,
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
