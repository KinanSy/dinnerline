/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState, useEffect } from 'react';
import API_ENDPOINTS from "../Api";
import MealCategory from "../MealCategory";


function Menu() {
    const [categories, setCategoriesData] = useState([]);

    useEffect(() => {
        const fetchMenuData = async () => {
          try {
            const response = await fetch(`${API_ENDPOINTS.MealCategory}`);
            const responsedata = await response.json();
            setCategoriesData(responsedata.data);
          } catch (error) {
            console.error("Error fetching menu data:", error);
          }
        };
        fetchMenuData();
      }, []);

      
      return (
        <div>
            {categories.map((category,i) => {
                return <MealCategory key="i" name={category.Name}></MealCategory>
            })}
        </div>
      )
}
export default Menu;