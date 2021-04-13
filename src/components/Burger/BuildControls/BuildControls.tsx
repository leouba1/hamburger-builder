import React, { FC } from "react";
import classes from "./BuildControls.module.css";
import BuildControl from "./BuildControl/BuildControl";

type BuildControlsProps = {
  ingredientAdded: (ingredient: string) => void;
  ingredientRemove: (ingredient: string) => void;
  order: () => void;
  disabled: { [key: string]: boolean }; // {salad: true, meat: false ...}
  price: number;
  purchasable: boolean;
}

const controls = [
  { label: "Salad", type: "salad" },
  { label: "Bacon", type: "bacon" },
  { label: "Cheese", type: "cheese" },
  { label: "Meat", type: "meat" },
];

const BuildControls: FC<BuildControlsProps> = ({
  ingredientAdded,
  ingredientRemove,
  disabled,
  price,
  purchasable,
  order,
}) => {
  return (
    <div className={classes.BuildControls}>
      <p>
        Current Price: <strong>{price.toFixed(2)}</strong>
      </p>
      {controls.map((ctrl) => (
        <BuildControl
          key={ctrl.label}
          label={ctrl.label}
          added={() => ingredientAdded(ctrl.type)}
          remove={() => ingredientRemove(ctrl.type)}
          disabled={disabled[ctrl.type]}
        />
      ))}
      <button
        className={classes.OrderButton}
        disabled={!purchasable}
        onClick={order}
      >
        ORDER NOW
      </button>
    </div>
  );
};

export default BuildControls;
