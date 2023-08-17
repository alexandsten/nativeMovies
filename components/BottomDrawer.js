import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import { Feather, FontAwesome } from '@expo/vector-icons'; 
import DrawerNav from './DrawerNav';
import Navigation from './Navigation';
import Home from '../screens/Home';


const Tab = createBottomTabNavigator();

export default function BottomDrawer() {
  return (
    <Tab.Navigator>
        
      <Tab.Screen name="Home" component={Home} options={{
        tabBarIcon: ({color, size}) => <Feather name="info" size={size} color={color} />
      }}/>
      <Tab.Screen name="Drawer Nav" component={DrawerNav} options={{
        tabBarIcon: ({color, size}) => <Feather name="info" size={size} color={color} />
      }}/>
      <Tab.Screen name="Navigation" component={Navigation} options={{
        tabBarIcon: ({color, size}) => <FontAwesome name="map-marker" size={size} color={color} />,
        title: '',
      }}/>
    </Tab.Navigator>
  );
}