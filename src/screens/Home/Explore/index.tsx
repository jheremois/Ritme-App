import React, { useState } from "react";
import Header from "@src/components/Header";
import InnerNav from "@src/components/InnerNav";
import InnerHeader from "@src/components/InnerHeader";

const Explore = ()=>{
    return(
        <>
            {/* <InnerHeader tabName={"Home"}/> */}
            <Header/>
            <InnerNav/> 
        </>
    )
}

export default Explore