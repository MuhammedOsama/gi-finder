import React, {useState} from "react";
import {Modal} from "react-bootstrap";

export default function ImageBlock(props)
{
    const [showModal, setShowModal] = useState(false);

    /**
     * Function that takes fav images' urls and add them to Likes array in localStorage
     * @param url
     */
    function addToFav(url) {
        let likes = JSON.parse(localStorage.getItem("likes"));
        likes = [...likes, url];
        localStorage.setItem("likes", JSON.stringify(likes));
    }

    return <div className="gifs-content">
        <img className="gifs-img" src={props.image} alt={props.image} />
        <div className="overlay">
            <span onClick={() => addToFav(props.image)} className="fas fa-heart icon"> </span>
            <span onClick={() => setShowModal(true)} className="fas fa-expand icon"> </span>
        </div>
        <Modal className="modal-box" show={showModal} onHide={() => setShowModal(false)}>
            <img src={props.image} alt="Gif" />
            <div className="content">
                <div className="sub-content">
                    <div className="header">
                        <h3 className="title-header">Information:</h3>
                    </div>
                    <span className="title">Title:</span>
                    <span className="value">{props.title}</span>
                </div>
                <div className="sub-content">
                    <span className="title">Owner:</span>
                    <span className="value">{props.owner}</span>
                </div>
                <div className="sub-content">
                    <span className="title">Rating:</span>
                    <span className="value">{props.rating}</span>
                </div>
            </div>
        </Modal>
    </div>
}
