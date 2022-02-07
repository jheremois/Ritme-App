import React from 'react'
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { Dimensions, Pressable, View } from 'react-native';
import Explore from '@screens/Home/Explore';
import { AppColors } from '@src/shared/styles/AppResourses';
import Header from '@src/components/Header';
import Profile from '@src/screens/Profile';
import { AppLooks } from '@src/shared/styles/AppLooks';
import CreatePost from '@src/screens/CreatePost';
import FeedRoutes from '@router/Feed.routes';
import SearchBar from '@src/screens/SearchBar';
import Settings from '@src/screens/Settings';

const icons: any = ["home", "search", "add","person", "settings"];
const getTemplateIcon = (focused: boolean, pos: number) => {
    return (<Ionicons name={icons[pos]} size={25} color={focused ? AppColors.indigo : "#f0f0f070"} />);
};
const setIcons = (iconsPost: number) => {
    return {
        tabBarIcon: (prop: any) => getTemplateIcon(prop.focused, iconsPost),
    };
};

const Tap = createBottomTabNavigator()

function AppRoutes({navigation}: any) {

    
    const CreateTab = ()=>(
        <Pressable
            onPress={()=> navigation.navigate("createPost")}
            style={[{width: Dimensions.get("screen").width / 7, zIndex: 999}]}
        >
            <View 
                style={[
                    {
                        top: -10,
                        width: Dimensions.get("screen").width / 7,
                        height: Dimensions.get("screen").width / 7,
                        borderColor: AppColors.white + 15,
                    },
                    AppLooks.borderS, AppLooks.bgIndigo, AppLooks.alignCenter, AppLooks.contentCenter, AppLooks.rounded
                ]}            
            >
                <Ionicons name={"add"} size={40} color={"#f0f0f0"} />
            </View>
        </Pressable>
    )


    return (
        <>
            {/* <Header/> */}
            <Tap.Navigator
                initialRouteName="Home"
                screenOptions={{
                    tabBarStyle: { backgroundColor: AppColors.gray, height: 55, paddingVertical: 5, borderTopColor: '#f0f0f020',},
                    tabBarItemStyle: {justifyContent: 'center', alignItems: 'center'},
                    tabBarLabelStyle: {marginBottom: 5,},
                    headerShown: false,
                    tabBarActiveTintColor: AppColors.indigo, 
                    tabBarInactiveBackgroundColor: 'f0f0f880', 
                }}
            >
                <Tap.Screen name="Home" component={FeedRoutes} options={setIcons(0)} />
                <Tap.Screen name="Search" component={SearchBar} options={setIcons(1)} />
                <Tap.Screen name="create" component={CreatePost} 
                    options={{
                        tabBarIcon: ({poprs}: any)=>(
                            <CreateTab/>
                        ),
                        tabBarLabelStyle: {
                            display: "none"
                        }
                    }}
                />
                <Tap.Screen name="Profile" component={Profile} options={setIcons(3)} />
                <Tap.Screen name="Settings" component={Settings} options={setIcons(4)} />
            </Tap.Navigator>
        </>
    )
}

export default AppRoutes