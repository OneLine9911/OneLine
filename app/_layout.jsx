import { Stack, useRouter } from 'expo-router'
import { useEffect } from 'react'
import { AuthProvider, useAuth } from '../contexts/AuthContext'
import { supabase } from '../lib/supabase'

const _layout = () => {
    return (
        <AuthProvider>
            <MainLayout />
        </AuthProvider>
    )
}

const MainLayout = () => {
    const { setAuth } = useAuth();
    const router = useRouter();

    useEffect(() => {
        supabase.auth.onAuthStateChange((_event, session) => {

            if(session) {
                setAuth(session?.user);
                router.replace('/home');
            } else {
                setAuth(null);
                router.replace('/welcome');
            }
        })
        
    }, [])

    return (
        <Stack
            screenOptions={{
                headerShown: false
            }}
        />
    )
}

export default _layout