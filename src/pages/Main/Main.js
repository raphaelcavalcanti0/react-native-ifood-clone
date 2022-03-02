import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Restaurants } from '../Restaurants/Restaurants'
import { Profile } from '../Profile/Profile'
import Feather from 'react-native-vector-icons/Feather'

const Tab = createBottomTabNavigator()

export default function Main() {
  return (
    <Tab.Navigator
      screenOptions={
        ({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName
            if (route.name === 'Restaurantes') {
              iconName = 'home';
            } else if (route.name === 'Profile') {
              iconName = 'user';
            }
            return <Feather name={iconName} size={size} color={color} />
          },
          tabBarActiveTintColor: 'tomato',
          tabBarInactiveTintColor: 'gray',
          headerShown: false,
        })
      }>
      <Tab.Screen name="Restaurantes" component={Restaurants} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator >
  );
}
