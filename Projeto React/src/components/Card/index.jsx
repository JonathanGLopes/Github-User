import React from "react";
import './card.css';

export default function Card({img, title, text}){
    return (
        <div className="card">
            <img src={img} alt="" />
            <h1>{title}</h1>
            <p>{text}</p>
        </div>
    )
}