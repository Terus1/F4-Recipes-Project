import React, {useState, useEffect} from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import {Link} from "react-router-dom";
import "../styles/Recipes.css"


const Recipes = () => {
  const [recipes, setRecipes] = useState([]);
  const { id } = useParams()


  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/recipes/?category_id=${id}`)
      .then(response => setRecipes(response.data))
      .catch(error => console.error(error));
  }, [id]);

  return (
    <div>
      <h1 className={'recipes-main-head'}>Рецепты</h1>
      <p className={'help-text-recipe'}>(Выберите желаемый рецепт из перечисленных ниже)</p>

      <ul className={'list-recipes'}>
        {recipes.map(recipe => (
          <li key={recipe.id} className={'rec-li'}>
            <Link to={`/recipe/${recipe.id}`} className={'recipe-link'}>{recipe.title}</Link>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default Recipes;
