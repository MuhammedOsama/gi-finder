import axios from "axios";

/**
 * An action that handles user search
 * @param searchTerm
 * @returns {function(*): void}
 */
export function getGIFs(searchTerm)
{
    return function (dispatch)
    {
        axios.get(`https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=ETXYy3gzKGN1joTjTGyUntfUvjn1CfEh`)
            .then(({data}) => {
                dispatch({ type: "GET_GIFS", payload: data.data });
            }, (e) => {
                console.log(e);
            })
    }
}
