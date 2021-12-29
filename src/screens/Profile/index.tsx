import React, { useState, useEffect, useContext } from "react";
import { Dimensions, Pressable, Text, View } from "react-native";
import { userPlacehold } from "@src/helpers/consts";
import { ProfileInfo } from "@src/components/ProfileInfo";
import { getCurrentUser } from "@src/services/User.services";
import { profileType } from "@src/shared/interfaces/user.type";
import PostsList from "@src/components/PostsList";
import { Instagram } from "react-content-loader/native";
import {  Instagram as Lol } from "react-content-loader";
import PostLoader from "@src/components/PostLoader";
import ProfileLoader from "@src/components/ProfileLoader";

const Profile = ({navigation}: any)=>{

  const [username, setUsername] = useState<profileType>(
    {
      email: "",
      profile_pic: userPlacehold,
      user_description: "",
      user_id: null,
      user_name: ""
    }
  )

  const [isFetching, setIsFetching] = useState(false);

  const feed  = [
    {
        profile_pic: null,
        user_name: "juan",
        post_image: "https://lh3.googleusercontent.com/YTAlbutuhERJtM4eeoRCw6v3Eqen_460tV68l-Ll4yWUg_v5NmDZOBsGo1SAaDpjBva9aMpuwJUUpCnlJQ6kKg3EWmJO3mF_RflJ9M2cM83CIfHZJP6h5HfTTDyqEaeTDbyHjPmy4VhwxT8K5vVNSXysz_fZZ62N6d62EgANsm6ktD6zyQFDwTZ5A6jHxAUEyk1JMebgQpWCCPYRs58aOViHIss4n9HQ9zkM7804qaWjZy8l1Abd4u3ZpAYzL51rb1FMOcFXdV-XZzV-SEj56uYRUSJSNlJ6JI9_2kqojEUt34Il6h6MoJCSoja7DH62Hp50HD3lQxjwTMVp7oLfZXB3rOudenuhJOsN_IrBHvNWW7xDdnURQhXz2zVUO3kW7vRtmiCP7R7T2w5Czgjo8P40Q8s1O26NDtFeRkvuSPbVeUzR2aQ0wp1wCbkvPS2jOHx_2uf5_TyjX0WDytw7RcztFh2UbTbHULKyxIEn3EhFOQ6wmqg4KmVBUvt8S89nBYW3FKDzPd1x8TaNqgl0V-xMTT21KG5MbBigE3H6hpnSvoOwaokWcDorTTKwoIUPKVUGRc3_YEKzCwyy1evhtYXSnYKKAvBzg2Q_vYoXHA05US7WRAnfX0B2F0a4Eg40C_bBWaETXTQBHT0ozur2PLx9U_uoxMt-qIgNyHWW32qp3Qakdb1-xjDFwjU1zQM5yUe7XIP4NhtBKsMxTA=w720-h540-no?authuser=0",
        post_tag: "Code",
        post_description: "Jajajajaj la para 01",
    },
    {
        profile_pic: null,
        user_name: "juan",
        post_image: "https://lh3.googleusercontent.com/YTAlbutuhERJtM4eeoRCw6v3Eqen_460tV68l-Ll4yWUg_v5NmDZOBsGo1SAaDpjBva9aMpuwJUUpCnlJQ6kKg3EWmJO3mF_RflJ9M2cM83CIfHZJP6h5HfTTDyqEaeTDbyHjPmy4VhwxT8K5vVNSXysz_fZZ62N6d62EgANsm6ktD6zyQFDwTZ5A6jHxAUEyk1JMebgQpWCCPYRs58aOViHIss4n9HQ9zkM7804qaWjZy8l1Abd4u3ZpAYzL51rb1FMOcFXdV-XZzV-SEj56uYRUSJSNlJ6JI9_2kqojEUt34Il6h6MoJCSoja7DH62Hp50HD3lQxjwTMVp7oLfZXB3rOudenuhJOsN_IrBHvNWW7xDdnURQhXz2zVUO3kW7vRtmiCP7R7T2w5Czgjo8P40Q8s1O26NDtFeRkvuSPbVeUzR2aQ0wp1wCbkvPS2jOHx_2uf5_TyjX0WDytw7RcztFh2UbTbHULKyxIEn3EhFOQ6wmqg4KmVBUvt8S89nBYW3FKDzPd1x8TaNqgl0V-xMTT21KG5MbBigE3H6hpnSvoOwaokWcDorTTKwoIUPKVUGRc3_YEKzCwyy1evhtYXSnYKKAvBzg2Q_vYoXHA05US7WRAnfX0B2F0a4Eg40C_bBWaETXTQBHT0ozur2PLx9U_uoxMt-qIgNyHWW32qp3Qakdb1-xjDFwjU1zQM5yUe7XIP4NhtBKsMxTA=w720-h540-no?authuser=0",
        post_tag: "Code",
        post_description: "Jajajajaj la para 01",
    },
    {
        profile_pic: null,
        user_name: "juan",
        post_image: "https://lh3.googleusercontent.com/YTAlbutuhERJtM4eeoRCw6v3Eqen_460tV68l-Ll4yWUg_v5NmDZOBsGo1SAaDpjBva9aMpuwJUUpCnlJQ6kKg3EWmJO3mF_RflJ9M2cM83CIfHZJP6h5HfTTDyqEaeTDbyHjPmy4VhwxT8K5vVNSXysz_fZZ62N6d62EgANsm6ktD6zyQFDwTZ5A6jHxAUEyk1JMebgQpWCCPYRs58aOViHIss4n9HQ9zkM7804qaWjZy8l1Abd4u3ZpAYzL51rb1FMOcFXdV-XZzV-SEj56uYRUSJSNlJ6JI9_2kqojEUt34Il6h6MoJCSoja7DH62Hp50HD3lQxjwTMVp7oLfZXB3rOudenuhJOsN_IrBHvNWW7xDdnURQhXz2zVUO3kW7vRtmiCP7R7T2w5Czgjo8P40Q8s1O26NDtFeRkvuSPbVeUzR2aQ0wp1wCbkvPS2jOHx_2uf5_TyjX0WDytw7RcztFh2UbTbHULKyxIEn3EhFOQ6wmqg4KmVBUvt8S89nBYW3FKDzPd1x8TaNqgl0V-xMTT21KG5MbBigE3H6hpnSvoOwaokWcDorTTKwoIUPKVUGRc3_YEKzCwyy1evhtYXSnYKKAvBzg2Q_vYoXHA05US7WRAnfX0B2F0a4Eg40C_bBWaETXTQBHT0ozur2PLx9U_uoxMt-qIgNyHWW32qp3Qakdb1-xjDFwjU1zQM5yUe7XIP4NhtBKsMxTA=w720-h540-no?authuser=0",
        post_tag: "Code",
        post_description: "Jajajajaj la para 01",
    },
    {
        profile_pic: null,
        user_name: "juan",
        post_image: "https://lh3.googleusercontent.com/YTAlbutuhERJtM4eeoRCw6v3Eqen_460tV68l-Ll4yWUg_v5NmDZOBsGo1SAaDpjBva9aMpuwJUUpCnlJQ6kKg3EWmJO3mF_RflJ9M2cM83CIfHZJP6h5HfTTDyqEaeTDbyHjPmy4VhwxT8K5vVNSXysz_fZZ62N6d62EgANsm6ktD6zyQFDwTZ5A6jHxAUEyk1JMebgQpWCCPYRs58aOViHIss4n9HQ9zkM7804qaWjZy8l1Abd4u3ZpAYzL51rb1FMOcFXdV-XZzV-SEj56uYRUSJSNlJ6JI9_2kqojEUt34Il6h6MoJCSoja7DH62Hp50HD3lQxjwTMVp7oLfZXB3rOudenuhJOsN_IrBHvNWW7xDdnURQhXz2zVUO3kW7vRtmiCP7R7T2w5Czgjo8P40Q8s1O26NDtFeRkvuSPbVeUzR2aQ0wp1wCbkvPS2jOHx_2uf5_TyjX0WDytw7RcztFh2UbTbHULKyxIEn3EhFOQ6wmqg4KmVBUvt8S89nBYW3FKDzPd1x8TaNqgl0V-xMTT21KG5MbBigE3H6hpnSvoOwaokWcDorTTKwoIUPKVUGRc3_YEKzCwyy1evhtYXSnYKKAvBzg2Q_vYoXHA05US7WRAnfX0B2F0a4Eg40C_bBWaETXTQBHT0ozur2PLx9U_uoxMt-qIgNyHWW32qp3Qakdb1-xjDFwjU1zQM5yUe7XIP4NhtBKsMxTA=w720-h540-no?authuser=0",
        post_tag: "Code",
        post_description: "Jajajajaj la para 01",
    },
  ]

  const getMe = ()=> {
    getCurrentUser().then((res)=> {
      console.log("res user-> ", res?.data.response[0])
      setUsername(res?.data.response[0])
    }).catch((err)=>{
      console.log("user err ->", err)
    })
  }

  const onRefresh = async () => {
    await setIsFetching(true);
    await getMe()
    setTimeout(() => {
      setIsFetching(false);
    }, 3000);
  }

  useEffect(()=>{
    setIsFetching(true);
    getMe()
    setIsFetching(false);
  }, [])
  
    return(
        <>
          <PostsList
            data={feed}
            state={isFetching}
            refFunc={onRefresh}
            header={
              <>
                {
                  isFetching
                    ?
                    <View>
                        <View style={{alignItems: "center", width: "100%"}}>
                            <View style={{maxWidth: Dimensions.get("screen").width, overflow: "hidden"}}>
                                <ProfileLoader/>
                            </View>
                        </View>
                    </View>
                    :
                      <ProfileInfo 
                        user_name={username.user_name}
                        user_description={username.user_description}
                        profile_pic={userPlacehold}
                        action={()=> navigation.navigate("settings")} 
                      />
                  }
              </>
            }
          />
        </>
    )
}

export default Profile