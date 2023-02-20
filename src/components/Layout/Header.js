import { Fragment} from 'react';
import mealImage from '../../assets/meals.jpg';
import HeaderCartButton from './HeaderCartButton';
import classes from './Heder.module.css';

const Header = (props) => {
  return (
    <Fragment>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onCartClick={props.onCartClick}/>
      </header>
      <div className={classes['main-image']}>
        <img src={mealImage} alt="delicious food"/>
      </div>
    </Fragment>
   );
}

export default Header;