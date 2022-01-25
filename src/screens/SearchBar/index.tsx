import React, { useEffect, useState } from "react";
import { View, Text, Image, Dimensions, Pressable, FlatList } from "react-native";
import { AppLooks as AL, AppLooks } from "@src/shared/styles/AppLooks";
import { smallLogo } from "@src/helpers/consts";
import { Ionicons } from "@expo/vector-icons";
import { AppColors } from "@src/shared/styles/AppResourses";
import { TextInput } from "react-native-gesture-handler";
import { useNavigation } from "@react-navigation/native";
import { getUsers } from "@src/services/User.services";
import { checkImage } from "@src/helpers/ImageUplader";


const SearchBar = ({navigation}: any)=>{
    
    const navigate = useNavigation()
    const [search, setSearch] = useState("")
    const [users, setUsers] = useState([])

    const getUsersData = ()=>{
        getUsers().then((res: any)=>{
            setUsers(res.data.response)
            console.log("users data: ", res.data);
            
        }).catch((err)=>{
            console.log(err)
        })
        
    }

    const filterItems = (query: any) => {
        return users.filter((el: any) =>(
            search.length !== 0
            ?
            el.user_name.toLowerCase().indexOf(query.toLowerCase()) > -1
            :
            []  
        )
        );
    }

    useEffect(()=>{
        getUsersData()
    }, [])

    const [load, setLoad] = useState(14)

    const RenderItem = ({ item }: any) => {
    
        return(
            <>
                <Pressable
                    onPress={()=>{
                        navigation.navigate('userProfile', {id: item.user_id})
                    }}
                >
                    <View
                        style={{
                            padding: 10,
                            display: "flex",
                            flexDirection: "row",
                            alignItems: "center",
                        }}
                    >
                        <Image
                            style={{
                                height: Dimensions.get("screen").width / 8,
                                width: Dimensions.get("screen").width / 8,
                                borderRadius: 190,
                            }}
                            source={checkImage(item.profile_pic)}
                        />
                        <Text
                            style={{
                                color: "#f0f0f0",
                                marginLeft: 10,
                                fontSize: 18
                            }}
                        >
                            {
                                item.user_name
                            }
                        </Text>
                    </View>
                </Pressable>
            </>
        )
    }

    return(
        <>
            <View
                style={[
                    AppLooks.flexRow,
                    AppLooks.alignCenter,
                    AL.bgGray,
                    {
                        paddingVertical: 10
                    }
                ]}
            >
                <Pressable
                    onPress={()=>{
                        navigate.goBack()
                    }}
                    
                    style={[
                        AppLooks.alignCenter,
                        AppLooks.contentCenter,
                        {
                            width: "12%",

                        }
                    ]}
                >
                    <Ionicons name="arrow-back" size={22} color={AppColors.white}/>
                </Pressable>
                <TextInput
                    placeholder="user name..."
                    value={search}
                    onChangeText={setSearch}
                    keyboardType="web-search"
                    autoFocus={true}
                    style={[
                        {
                            width: "80%",
                            borderColor: "#f0f0f040",
                            paddingVertical: 5,
                            borderBottomWidth: 1,
                        },
                        {
                            fontSize: 16,
                            color: AppColors.white,
                        }
                    ]}
                />
            </View>
            <FlatList
                initialNumToRender={14}
                data={filterItems(search)}
                onEndReached={() => {
                    users.length > load
                    ?
                        setLoad(load + 4)
                    :
                        null
                }}
                onEndReachedThreshold={0.3}
                keyExtractor={item => Math.random() + " 1" + Date.now()}
                renderItem={({ item }) => (
                    search.length !== 0
                    ?
                        <RenderItem
                            item={item}
                        />
                    :
                        <View></View>
                )}
                showsVerticalScrollIndicator={false}
                listKey={`D${Date.now()}`}
            />
        </>
    )
}

export default SearchBar