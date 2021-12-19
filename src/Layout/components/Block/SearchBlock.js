import React from "react";
import {getGIFs} from "../../../store/actions";
import {useDispatch} from "react-redux";

// style
import "./style/SearchBlock.scss";

export default function SearchBlock()
{
    const dispatch = useDispatch();

    return <>
        <div className="search-icon">
            <input type="search" placeholder="Search..." onChange={(e) => dispatch(getGIFs(e.target.value))} />
            <label className="icon">
                <span className="fas fa-search"> </span>
            </label>
        </div>
    </>
}
