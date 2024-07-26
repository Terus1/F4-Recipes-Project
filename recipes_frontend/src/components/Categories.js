import React, {useState, useEffect} from "react";
import { Link } from 'react-router-dom'
import axios from "axios";
import "../styles/Categories.css"


const Categories = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/api/categories/')
      .then(response => setCategories(response.data))
      .catch(error => console.error(error));
  }, []);

  return (
    <div>
      <h1 className={'categories-main-head'}>Категории</h1>
      <p className={'help-text-category'}>(Выберите желаемую категорию из перечисленных ниже)</p>
      <ul className={'list-categories'}>
        {categories.map(category => (
          <li key={category.id} className={'cat-li'}>
            <Link to={`/category/${category.id}`} className={'category-link'}>{category.name}</Link>

          </li>
        ))}
      </ul>
    </div>
  );
};

export default Categories;
