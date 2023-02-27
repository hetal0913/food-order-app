import { useContext } from 'react';

import MealItemForm from './MealItemForm';
import classes from './MealItem.module.css';
import CartContext from '../../../store/card-context';

const MealItem = (props) => {
  const {id, price, name, description} = props.meal
  const cartCtx = useContext(CartContext);

  const priceNew = `$${price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: id,
      name: name,
      amount: amount,
      price: price,
    });
  };

  return (
    <li className={classes.meal}>
      <div>
        <h3>{name}</h3>
        <div className={classes.description}>{description}</div>
        <div className={classes.price}>{priceNew}</div>
      </div>
      <div>
        <MealItemForm id={props.id} onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};

export default MealItem;