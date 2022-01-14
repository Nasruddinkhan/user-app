import classes from "./AvailableMeals.module.css";
import Card from "../UI/Card";
import MealItem from "./MealItem/MealItem";
import { useEffect, useState } from "react";

const AvailableMeals = () => {
  const [meals, setMeals] = useState([]);
  const [isloading, setIsLoading] = useState(false);
  const [httpError, setHttpError] = useState(false);

  useEffect(() => {
    console.log("log EFFECT");
    const fetchMeals = async () => {
      setIsLoading(true);
      const response = await fetch(
        "https://react-http-af29c-default-rtdb.firebaseio.com/meals.json"
      );
      if (!response.ok) {
        throw new Error("Something went wrong");
      }
      const responseData = await response.json();
      const loadedMeals = [];
      for (const key in responseData) {
        loadedMeals.push({
          id: key,
          name: responseData[key].name,
          description: responseData[key].description,
          price: responseData[key].price,
        });
      }
      setMeals(loadedMeals);
      setIsLoading(false);
    };

    fetchMeals().catch((err) => {
      setIsLoading(false);
      setHttpError(err.message);
    });
  }, []);

  if (isloading) {
    return (
      <section className={classes.meals}>
        <Card>
          <p> loading .... </p>
        </Card>
      </section>
    );
  }

  
  if (httpError) {
    return (
      <section className={classes.meals}>
        <Card>
          <p className={classes.errortext}> {httpError} </p>
        </Card>
      </section>
    );
  }
  const mealsList = meals.map((meal) => (
    <MealItem
      key={meal.id}
      id={meal.id}
      name={meal.name}
      description={meal.description}
      price={meal.price}
    />
  ));

  return (
    <section className={classes.meals}>
      <Card>
        <ul>{mealsList}</ul>
      </Card>
    </section>
  );
};

export default AvailableMeals;
