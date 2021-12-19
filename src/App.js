import React, {useEffect} from "react";
import Home from "./Layout/Home";
import {BrowserRouter, Route, Switch} from "react-router-dom";
import Navbar from "./Layout/components/Navbar";
import Favorite from "./Layout/components/Favorite";
import Footer from "./Layout/components/Footer";
import {useDispatch} from "react-redux";
import {getGIFs} from "./store/actions";

export default function App()
{
    const dispatch = useDispatch();

    useEffect(() => {
        // if there are no likes before, add empty array onFirstLoad
        if (!localStorage.getItem("likes")) {
            localStorage.setItem("likes", "[]");
        }

        // load website with 'gif' word
        dispatch(getGIFs("trend gif"));
    }, [dispatch]);

    return <div className="App">
        <BrowserRouter>
            <Navbar />
            <Switch>
                <Route path="/" exact component={Home} />
                <Route path="/favorite" exact component={Favorite} />
            </Switch>
            <Footer />
        </BrowserRouter>
    </div>
}
