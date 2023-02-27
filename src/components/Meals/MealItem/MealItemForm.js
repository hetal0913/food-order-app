import { useRef, useState } from "react";
import Input from "../../UI/Input";
import classes from "./MealItemForm.module.css";

const MealItemForm = (props) => {
  const amountRef = useRef();
  const [amountIsValid, setAmountIsValid] = useState(true);
  const submitHandler = (event) => {
    event.preventDefault();
    const enteredAmount = amountRef.current.value;
    const enteredAmountNo = +enteredAmount;
    if(enteredAmount.trim().length === 0 || enteredAmountNo < 1 || enteredAmountNo > 5) {
      setAmountIsValid(false);
      return;
    }
    props.onAddToCart(enteredAmountNo);
  };

  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        label="Amount"
        ref={amountRef}
        input={{
          id: "amount" + props.id,
          type: "number",
          step: "1",
          min: "1",
          max: "5",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
      {!amountIsValid && <p>Please enter valid amount (1-5).</p>}
    </form>
  );
};

export default MealItemForm;
