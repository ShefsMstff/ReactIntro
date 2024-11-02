
import React from 'react';
import './Card.scss'

const Card = ({ img, price, name, year, way }) => {
  return (
    <div className="container">
      <div className="card">
        <img src={img} alt={name} className="card-img" />
        <div className="card-action">
          <h5>{price}$</h5>
          <h4>{name}</h4>
          <div className="card-action-flex">
            <p>{year}{way}km</p>
          </div>
        </div>
      </div>
      <div className="card">
        <img src={img} alt={name} className="card-img" />
        <div className="card-action">
          <h5>{price}$</h5>
          <h4>{name}</h4>
          <div className="card-action-flex">
            <p>{year}{way}km</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Card;

