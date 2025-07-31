import { Stack } from 'expo-router'
import ScreenWrapper from '../components/ScreenWrapper'

const _layout = () => {
    return (
        <ScreenWrapper>
            <Stack
                screenOptions={{
                    headerShown: false
                }}
            />
        </ScreenWrapper>
    )
}

export default _layout