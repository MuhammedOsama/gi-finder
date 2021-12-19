import React, {useEffect, useState} from "react";

// style
import "./style/Main.scss";

export default function Favourite()
{
    const [gifs, setGifs] = useState([]);

    useEffect(() => {
        setGifs(JSON.parse(localStorage.getItem("likes")));
    }, []);

    return <div id="gifs">
        {gifs?.map((gif, i) => {
            return <div key={i} className="gifs-content">
                <img className="gifs-img" src={gif} alt={gif}/>
            </div>
        })}
    </div>
}
