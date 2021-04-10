import React, { FC, Fragment } from "react";
import Ingredients from "../../../models/Ingredients";
import Button from "../../UI/Button/Button";

interface Props {
  purchaseCanceled: () => void;
  purchaseConfirmed: () => void;
  ingredients: Ingredients;
  totalPrice: number
}

const OrderSummary: FC<Props> = ({
  ingredients,
  totalPrice,
  purchaseCanceled,
  purchaseConfirmed,
}) => {
  const ingredientSummary = Object.keys(ingredients).map((igKey) => {
    return (
      <li key={igKey}>
        <span style={{ textTransform: "capitalize" }}>{igKey}</span>:{" "}
        {ingredients[igKey as keyof Ingredients]}
      </li>
    );
  });

  return (
    <Fragment>
      <h3>Your Order</h3>
      <p>A delicious burger with the following ingredients:</p>
      <ul>{ingredientSummary}</ul>
      <p><strong>Total Price: {totalPrice.toFixed(2)}</strong></p>
      <p>Continue to checkout</p>
      <Button btnType="Danger" clicked={purchaseCanceled}>
        CANCEL
      </Button>
      <Button btnType="Success" clicked={purchaseConfirmed}>
        CONTINUE
      </Button>
    </Fragment>
  );
};

export default OrderSummary;
