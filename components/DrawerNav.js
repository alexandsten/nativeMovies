import { createDrawerNavigator } from '@react-navigation/drawer';
import DummyPage1 from "../screens/DummyPage1";
import DummyPage2 from "../screens/DummyPage2";
import Home from "../screens/Home";
import Navigation from "./Navigation";

const Drawer = createDrawerNavigator();

export default function DrawerNav() {
  return (
    <Drawer.Navigator>
        
      <Drawer.Screen name="Home" component={Home} />
      <Drawer.Screen name="Navigation" component={Navigation} />
      <Drawer.Screen name="Dummy page 1" component={DummyPage1} />
      <Drawer.Screen name="Dummy page 2" component={DummyPage2} />
    </Drawer.Navigator>
  );
}