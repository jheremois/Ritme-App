import React, { useState, useEffect, useContext } from "react";
import InnerNav from "@src/components/InnerNav";
import { View, Text, FlatList } from "react-native";
import { AppLooks } from "@src/shared/styles/AppLooks";
import { UserContext } from "@src/context/userContext";
import PostsList from "@src/components/PostsList";

const Explore = ()=>{

    const [isFetching, setIsFetching] = useState(false);

    const onRefresh = async () => {
        await setIsFetching(true);
        setTimeout(() => {
            setIsFetching(false);
        }, 3000);
    };

    const loadPosts = async()=>{
        
    }

    useEffect(()=>{
        loadPosts()
    })

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
  
    return(
        <>
            {/* <InnerNav/>  */}
            <View style={{paddingBottom: 0}}>
                <PostsList
                    data={feed}
                    state={isFetching}
                    refFunc={onRefresh}
                    /* 
                    actions={{}}
                    TopHead={{}}
                    atScroll={{}}
                    messageEmpy={{}}
                    */
                />
            </View>
        </>
    )
}

export default Explore