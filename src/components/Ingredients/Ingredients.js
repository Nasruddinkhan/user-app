import React, { useState } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";

function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([]);
  const addIngredientsHandler = (ingredients) => {
    setUserIngredients((prevIngredients) => [
      ...prevIngredients,
      { id: Math.random().toString(), ...ingredients },
    ]);
  };
  const onRemoveItemHandler = (ingredientId) => {
    setUserIngredients((prevIngredients) =>
      prevIngredients.filter((ingredient) => ingredient.id !== ingredientId)
    );
  };

  return (
    <div className="App">
      <IngredientForm addIngredients={addIngredientsHandler} />

      <section>
        <Search />
        {/* Need to add list here! */}
        <IngredientList
          ingredients={userIngredients}
          onRemoveItem={onRemoveItemHandler}
        />
      </section>
    </div>
  );
}

export default Ingredients;
