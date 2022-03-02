import { Text, View } from "react-native"
import { StatusBar } from "expo-status-bar"


export const Profile = () => {
    return (
        <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
            <StatusBar style="theme-dark" />
            <Text>Profile</Text>
        </View >
    )
}