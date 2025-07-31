import { useRouter } from "expo-router";
import { Button, Text, View } from "react-native";

const index = () => {
    const router = useRouter();
    return (
        <View>
            <Text style={{ color: "white"}}>index</Text>
            <Button title="welcome" onPress={() => router.push('welcome')}></Button>
        </View>
    )
}

export default index