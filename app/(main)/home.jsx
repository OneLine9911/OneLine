import { useRouter } from 'expo-router'
import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import Icon from '../../assets/icons'
import Avatar from '../../components/Avatar'
import ScreenWrapper from '../../components/ScreenWrapper'
import { theme } from '../../constants/theme'
import { useAuth } from '../../contexts/AuthContext'
import { hp, wp } from '../../helpers/common'

const Home = () => {

    const { user, setAuth } = useAuth();
    const router = useRouter();

    const onAction = (userId) => {

    }

    const users = [
        {
            id: 1,
            username: 'Samuele Mamini',
            nickname: 'Mamo',
            image: user?.image,
            text: "dnspgndspgndfpgndfggbufbrwqobdfosbgoidfngidfniogbdofbdgobnxdiogdog"
        },
        {
            id: 2,
            username: 'Elia Savini',
            nickname: 'Savo',
            image: user?.image,
            text: "dnspgndspgndfpgndfggbufbrwqobdfosbgoidfngidfniogbdofbdgobnxdiogdog"
        },
        {
            id: 3,
            username: 'Filippo Cenni',
            nickname: 'Cen',
            image: user?.image,
            text: "dnspgndspgndfpgndfggbufbrwqobdfosbgoidfngidfniogbdofbdgobnxdiogdog"
        },
        {
            id: 4,
            username: 'Lorenzo Quercioli',
            nickname: 'Querc',
            image: user?.image,
            text: "dnspgndspgndfpgndfggbufbrwqobdfosbgoidfngidfniogbdofbdgobnxdiogdog"
        },
    ];


    return (
        <ScreenWrapper bg='white'>
            <View style={styles.container}>
                {/* header */}
                <View style={styles.header}>
                    <Text style={styles.title}>OneLine</Text>
                    <View style={styles.icons}>
                        <Pressable onPress={() => router.push('notifications')}>
                            <Icon name="heart" size={hp(3.2)} strokeWidth={2} color={theme.colors.text} />
                        </Pressable>
                        <Pressable onPress={() => router.push('newPost')}>
                            <Icon name="plus" size={hp(3.2)} strokeWidth={2} color={theme.colors.text} />
                        </Pressable>
                        <Pressable onPress={() => router.push('profile')}>
                            <Avatar
                                uri={user?.image}
                                size={hp(4.3)}
                                rounded={theme.radius.sm}
                                style={{ borderWidth: 2 }}
                            />
                        </Pressable>
                    </View>
                </View>
                <ScrollView style={styles.listStyle}>
                    {users.map(user => {

                        return (
                            <TouchableOpacity
                                key={user.id}
                                style={styles.userCard}
                                onPress={() => onAction(user.id)}
                            >
                                <View style={[styles.textContainer]}>
                                    <Text style={styles.nickname}>{user.text}</Text>
                                </View>
                                <Avatar
                                    style={styles.avatarStyle}
                                    uri={user?.image}
                                    size={hp(4)}
                                    rounded={theme.radius.sm}
                                />

                            </TouchableOpacity>
                        );
                    })}

                </ScrollView>


            </View>
        </ScreenWrapper>
    )
}

export default Home

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        marginBottom: 10,
        marginHorizontal: wp(4)
    },
    title: {
        color: theme.colors.text,
        fontSize: hp(3.2),
        fontWeight: theme.fonts.bold
    },
    avatarImage: {
        height: hp(4.3),
        width: hp(4.3),
        borderRadius: theme.radius.sm,
        borderCurve: 'continuous',
        borderColor: theme.colors.gray,
        borderWidth: 3
    },
    icons: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: 18
    },
    listStyle: {
        paddingTop: 20,
        paddingHorizontal: wp(4)
    },
    userCard: {
        width: wp(90),
        flexDirection: 'row',
        alignItems: 'center',
        marginBottom: 20,
        backgroundColor: 'white',
    },
    textContainer: {
        flex: 1,
        padding: 15,
        backgroundColor: '#f9f9f9',
        borderRadius: 8,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,

    },
    nickname: {
        fontSize: 14,
        color: 'gray',
    },
    avatarStyle: {
        position: 'absolute',
        bottom: -10,
        right: -12,
        padding: 7,
        borderRadius: 50,
        backgroundColor: 'white',
        shadowColor: theme.colors.textLight,
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.4,
        shadowRadius: 5,
        elevation: 7

    }
})