import React from 'react';

const ItemCard = ({ item }) => {
  return (
    <div className="item-card">
      <img src={item.imageUrl} alt={item.description} onError={(e) => (e.target.src = 'https://opencode.us/wp-content/uploads/2013/10/javascript_logo.png')}  />
      <p>{item.description}</p>
    </div>
  );
};

export default ItemCard;
