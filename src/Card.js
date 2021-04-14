import React from 'react'
import './Card.css';
import CheckList from './CheckList';
function Card() {
    
    
    return (
        <div className="card">
            <div className="card1">
                <h4 className="head">Store Categories</h4>
            </div>
            <div className="card2">
                <CheckList/>
            </div>
        </div>
    )
}

export default Card;
