import React, { useCallback, useState } from "react";
import { useEffect } from "react";

import IngredientForm from "./IngredientForm";
import IngredientList from "./IngredientList";
import Search from "./Search";
import ErrorModal from "../UI/ErrorModal";
const URL =
  "https://my-second-project-50046-default-rtdb.firebaseio.com/ingredients.json";
function Ingredients() {
  const [userIngredients, setUserIngredients] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const addIngredientsHandler = async (ingredients) => {
    setIsLoading(true);
    await fetch(URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(ingredients),
    })
      .then((response) => {
        setIsLoading(false);
        return response.json();
      })
      .then((responseData) => {
        setUserIngredients((prevIngredients) => [
          ...prevIngredients,
          { id: responseData.name, ...ingredients },
        ]);
      })
      .catch((error) => {
        setError("Something went wrong!");
        setIsLoading(false);
      });
  };

  const onRemoveItemHandler = (ingredientId) => {
    setIsLoading(true);
    fetch(
      `https://my-second-project-50046-default-rtdb.firebaseio.com/ingredients/${ingredientId}.jon`,
      {
        method: "DELETE",
      }
    )
      .then((response) => {
        setIsLoading(false);

        setUserIngredients((prevIngredients) =>
          prevIngredients.filter((ingredient) => ingredient.id !== ingredientId)
        );
      })
      .catch((error) => {
        setError("Something went wrong!");
        setIsLoading(false);
      });
  };

  useEffect(() => {
    console.log("RENDERING INGREDIENTS", userIngredients);
  }, [userIngredients]);

  useEffect(() => {
    fetch(URL)
      .then((response) => response.json())
      .then((responseData) => {
        const loadedIngredients = [];
        for (const key in responseData) {
          loadedIngredients.push({
            id: key,
            title: responseData[key].title,
            amount: responseData[key].amount,
          });
        }
        setUserIngredients(loadedIngredients);
      });
  }, []);

  const filteredIngredientsHandler = useCallback((filteredIngredients) => {
    setUserIngredients(filteredIngredients);
  }, []);

  const clearError = () => {
    setError(null);
  };

  return (
    <div className="App">
      {error && <ErrorModal onClose={clearError}>{error}</ErrorModal>}

      <IngredientForm
        addIngredients={addIngredientsHandler}
        loading={isLoading}
      />

      <section>
        <Search onLoadIngredients={filteredIngredientsHandler} />
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
