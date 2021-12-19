import React from "react";

// components
import MainSearch from "./components/MainSearch";
import GIFsContainer from "./components/GIFsContainer";

export default function Home()
{
    return <div id="home">
        <MainSearch />
        <GIFsContainer />
    </div>
}
