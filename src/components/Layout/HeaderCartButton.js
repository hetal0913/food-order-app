import { useContext } from "react";
import CartIcon from "../Cart/CartIcon";
import classes from './HeaderCartButton.module.css';
import CartContext from "../../store/card-context";

const HeaderCartButton = (props) => {
  const cartCtx = useContext(CartContext);
  console.log(cartCtx);
  const noOfCartItems = cartCtx.items.reduce((currItem, item) => {
    return currItem + item.amount;
  },0);

  return (
    <button className={classes.button} onClick={props.onCartClick}>
      <span className={classes.icon}><CartIcon /></span>
      <span>Your Cart</span>
      <span className={classes.badge}>{noOfCartItems}</span>
    </button>
   );
}

export default HeaderCartButton;