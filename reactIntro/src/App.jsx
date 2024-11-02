
import React from 'react';
import Card from './components/Card/Card.jsx';
import cars from './components/Card/CardData.jsx'; 

const App = () => {
  return (
    <div className="cars">
      {cars.map((product) => (
        <Card
          key={product.id}
          img={product.img}
          price={product.price}
          name={product.name}
          year={product.year}
          way={product.way}

        />
      ))}
    </div>
  );
};

export default App;
