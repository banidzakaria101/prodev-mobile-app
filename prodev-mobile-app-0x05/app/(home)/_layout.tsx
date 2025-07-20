import { AntDesign, EvilIcons, Feather, FontAwesome, Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

const HomeRootLayout = () => {
    return (
        <Tabs screenOptions={{
            tabBarActiveTintColor: '#34967C', headerShown: false
        }} >
            <Tabs.Screen name="index" options={{ title: 'Home', tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />
        }} />,
        <Tabs.Screen name="search" options={{
            title: 'Search',
            headerShown: true,
            tabBarIcon: ({ color }) => <AntDesign name="home" size={24} color={color} />
        }} />
        <Tabs.Screen name="saved" options={{
            title:'Saved',
            headerShown: true,
            tabBarIcon: ({ color } ) => <EvilIcons name="heart" size={17} color={color} />
        }} />
        <Tabs.Screen name="inbox" options={{
            title:'Inbox',
            headerShown: true,
            tabBarIcon: ({ color }) => < Ionicons name="chatbubble-outline" size={24} color={color} />
        }} />
        <Tabs.Screen name="profile" options={{
            title: 'Profile',
            headerShown: true,
            tabBarIcon: ({ color }) => <FontAwesome name="user-o" size={24} color="black" />
        }} />
        </Tabs>
    )
}

export default HomeRootLayout;