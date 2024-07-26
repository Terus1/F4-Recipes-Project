import React, {useState, useEffect} from "react";
import axios from "axios";
import {useParams} from "react-router-dom";
import '../styles/RecipeDetail.css'


const RecipeDetail = () => {
  const [recipe, setRecipe] = useState([])
  const {id} = useParams()

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/api/recipes/?id=${id}`)
      .then(response => setRecipe(response.data))

      .catch(error => console.error(error));
  }, [id]);

  return (
    <div>
        <h1 className={'recipe-main-head'}>Подробнее</h1>
        <ul>
          {recipe.map(rec => (
            <li key={rec.id} className={'recipe-link'}>
              <h3 className={'recipe-head'}>{rec.title}</h3>
              <p className={'small-description'}>Описание:</p>
              <p className={'recipe-info'}>
                {rec.description}
              </p>
              <p className={'ingredients'}>Ингридиенты:</p>
              <p className={'recipe-info'}>{rec.ingredients}</p>
            </li>
          ))}
        </ul>
    </div>
  )

}

export default RecipeDetail;
