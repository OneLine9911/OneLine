import { Alert, Button, StyleSheet, Text } from 'react-native'
import ScreenWrapper from '../../components/ScreenWrapper'
import { useAuth } from '../../contexts/AuthContext'
import { supabase } from '../../lib/supabase'

const Home = () => {

    const { setAuth } = useAuth();

    const onLogout = async () => {
        const { error } = await supabase.auth.signOut();
        if (error) {
            Alert.alert('Sign out', "Error signing out!");
        }
    }

    return (
        <ScreenWrapper>
            <Text>Home</Text>
            <Button title='logout' onPress={onLogout} />
        </ScreenWrapper>
    )
}

export default Home

const styles = StyleSheet.create({})