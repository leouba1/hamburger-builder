import React, { Fragment, useState, useEffect } from "react";
import Burger from "../../components/Burger/Burger";
import BuildControls from "../../components/Burger/BuildControls/BuildControls";
import Modal from "../../components/UI/Modal/Modal";
import OrderSummary from "../../components/Burger/OrderSummary/OrderSummary";

import {Ingredients, IngredientPrices} from "../../models/Ingredients";

const initialPrice = 4;

export default function BurgerBuilder() {
  const [purchasable, setPurchasable] = useState<boolean>(false);
  const [purchasing, setPurchasing] = useState<boolean>(false);
  const [price, setPrice] = useState<number>(initialPrice);
  const [ingredients, setIngredients] = useState<Ingredients>({
    salad: 0,
    bacon: 0,
    cheese: 0,
    meat: 0,
  });

  let disabledInfo: any = { ...ingredients };
  //let disabledInfo: {[key: string]: boolean};

  useEffect(() => {
    disabledInfo = { ...ingredients };
    for (let key in disabledInfo) {
      disabledInfo[key] = disabledInfo[key] <= 0;
    }

    price > initialPrice ? setPurchasable(true) : setPurchasable(false);
  }, [ingredients]);

  const addIngredientHandler = (type: string) => {
    const updatedCount = ingredients[type as keyof Ingredients] + 1;
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type as keyof Ingredients] = updatedCount;
    setIngredients(updatedIngredients);
    const ingredientPrice = IngredientPrices.filter((el) => el.key === type)[0]
      ?.value;
    setPrice(price + ingredientPrice);
  };

  const removeIngredientHandler = (type: string) => {
    const oldCount = ingredients[type as keyof Ingredients];
    if (oldCount <= 0) {
      return;
    }
    const updatedCount = oldCount - 1;
    const updatedIngredients = { ...ingredients };
    updatedIngredients[type as keyof Ingredients] = updatedCount;
    setIngredients(updatedIngredients);
    const ingredientPrice = IngredientPrices.filter((el) => el.key === type)[0]
      ?.value;
    setPrice(price - ingredientPrice);
  };

  const orderHandler = () => {
    setPurchasing(true);
  };

  const orderCancelHandler = () => {
    setPurchasing(false);
  };

  const confirmOrderHandler = () => {
    alert("Order Confirmed!");
  };

  return (
    <Fragment>
      <Modal show={purchasing} modalClosed={orderCancelHandler}>
        <OrderSummary
          ingredients={ingredients}
          totalPrice={price}
          purchaseCanceled={orderCancelHandler}
          purchaseConfirmed={confirmOrderHandler}
        />
      </Modal>
      <Burger ingredients={ingredients} />
      <BuildControls
        ingredientAdded={addIngredientHandler}
        ingredientRemove={removeIngredientHandler}
        disabled={disabledInfo}
        price={price}
        purchasable={purchasable}
        order={orderHandler}
      />
    </Fragment>
  );
}
