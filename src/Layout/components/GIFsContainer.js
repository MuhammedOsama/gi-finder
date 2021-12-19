import React from "react";
import {useSelector} from "react-redux";

// style
import './style/Main.scss';
import ImageBlock from "./Block/ImageBlock";

export default function GIFsContainer()
{
    // get GIFs from reducer
    const gifs = useSelector(state => state.reducers.gifs);

    return <div id="gifs">
        {gifs?.map((gif, i) => {
            return <ImageBlock key={i} image={gif.images?.downsized?.url} title={gif?.title} owner={gif?.username} rating={gif?.rating.replace("pg-", "")} />
        })}
    </div>
}
