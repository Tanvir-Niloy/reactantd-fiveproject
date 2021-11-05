import React, { useEffect, useState } from "react";
import Dashboard from "./Dashboard";
import axios from "axios";
import { Col, Input, Row } from "antd";

function API() {
  const [meals, setMeals] = useState([]);
  const [dupmeals, setdupMeals] = useState([]);

  useEffect(() => {
    async function getData() {
      try {
        const response = await axios.get(
          "https://www.themealdb.com/api/json/v1/1/filter.php?a=Canadian"
        );
        setMeals(response.data.meals);
        setdupMeals(response.data.meals);
      } catch (error) {
        console.log(error);
      }
    }
    getData();
  }, []);

  function searchItems(value) {
    var filteredItems = dupmeals.filter((meal) =>
      meal.strMeal.toLocaleLowerCase().includes(value.toLocaleLowerCase())
    );

    setMeals(filteredItems);
  }

  return (
    <Dashboard>
      <div>
        <Input
          style={{ width: "30%", marginLeft: 50 }}
          placeholder="search items...."
          onChange={(e) => {
            searchItems(e.target.value);
          }}
        />
        <Row gutter={16} justify="center" style={{ marginTop: 50 }}>
          {meals.map((meal) => {
            return (
              <Col
                className="mealitem"
                lg={5}
                sm={24}
                style={{ textAlign: "center", fontSize: 18 }}
              >
                <h3>{meal.strMeal}</h3>
                <img
                  src={meal.strMealThumb}
                  alt={meal.strMeal}
                  height="200px"
                />
                <h4 style={{ fontWeight: "bold", marginTop: 10 }}>
                  ID : {meal.idMeal}
                </h4>
              </Col>
            );
          })}
        </Row>
      </div>
    </Dashboard>
  );
}

export default API;
