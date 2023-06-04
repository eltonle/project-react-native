import { NavigationContainer } from "@react-navigation/native";

import Feed from "./screens/tabScreens/Feed";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Settings from "./screens/tabScreens/Settings";
import Notifications from "./screens/tabScreens/Notifications";
import { Ionicons } from '@expo/vector-icons';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TweetDetailsScreen from "./screens/homeStack/TweetDetailsScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import Payments from "./screens/drawersScreens/Payments";
import { createMaterialTopTabNavigator } from "@react-navigation/material-top-tabs";
import { Image, Pressable } from "react-native";

//TopTabs
const TopTabs = createMaterialTopTabNavigator();
function TopTabsGroup({navigation}) {
    return(
    <TopTabs.Navigator 
     screenOptions={{ 
        tabBarLabelStyle: {
            textTransform: "capitalize",
            fontWeight: "bold",
        },
        tabBarIndicatorStyle: {
            height:5,
            borderRaduis: 5,
            backgroundColor: 'red',
        }
      }}
    >
        <TopTabs.Screen 
            name="main"
             component={Feed} 
            
             />
        <TopTabs.Screen name="Following" component={Payments}/>
        <TopTabs.Screen name="👀" component={Payments}/>
    </TopTabs.Navigator>
    );
}

//stack
const HomeStack = createNativeStackNavigator();
function HomeStackGroup(){
    return (
        <HomeStack.Navigator>
            <HomeStack.Screen 
              name="TapGroup" 
              component={TapGroup}
              options={{ headerShown:false }} 
              />
            <HomeStack.Screen 
               name="TweetDetailsScreen" 
               component={TweetDetailsScreen}
               options={{ presentation:"modal" }}
               />
        </HomeStack.Navigator>
    )
}
//tab Bottom 
const Tab = createBottomTabNavigator();

function TapGroup({navigation}){
     return(
        <Tab.Navigator
         screenOptions={({route, navigation})=>({
            tabBarIcon: ({color, focused, size})=>{
                let iconName;
                if(route.name === "Feed") {
                    iconName = focused ? "home" : "home-outline"
                } else if (route.name === "Settings") {
                    iconName = focused ? "settings" : "ios-settings-sharp"
                }else if (route.name === "Notifications") {
                    iconName = focused ? "ios-notifications" : "notifications-outline"
                }

                return <Ionicons name={iconName} size={size} color={color}/>
            },
            tabBarActiveTintColor: "#1DA1F2",
            tabBarInactiveTintColor: "gray",
         })}
        >
            <Tab.Screen 
             name="Feed"
             component={TopTabsGroup}
             options={{ 
                tabBarLabel:"@elton",
                
                headerLeft: () => (
                    <Pressable onPress={() => navigation.openDrawer()}>
                    <Image
                        source={require("./assets/beto.jpeg")}
                        style={{ width: 40, height: 40, borderRadius: 100, marginLeft: 15 }}
                    />
                    </Pressable>
                ),
            
              }}   
             />
            <Tab.Screen name="Settings" component={Settings}/>
            <Tab.Screen name="Notifications" component={Notifications}/>
        </Tab.Navigator>
     )
}


//drawer
const Drawer = createDrawerNavigator();

function DrawerGroup(){
    return(
        <Drawer.Navigator screenOptions={{ headerShown: false }}>
            <Drawer.Screen 
              name="HomeStackGroup" 
              component={HomeStackGroup}
                
              />
            <Drawer.Screen 
                name="Payments" 
                component={Payments}
                options={{ headerShown: true }}
                />
        </Drawer.Navigator>
    )
}

const Navigation = () => {
  return (
    <NavigationContainer>
    <DrawerGroup/>
       {/* <HomeStackGroup /> */}
    </NavigationContainer>
  )
}

export default Navigation
