import './App.css';
import { BrowserRouter, Route, Routes} from 'react-router-dom'
import Categories from "./components/Categories";
import Recipes from "./components/Recipes";
import RecipeDetail from './components/RecipeDetail';



function App() {
  return (
    <div>
    <BrowserRouter>
      <Routes>
        <Route path={'/'} element={<Categories />}/>
        <Route path={'category/:id'} element={<Recipes />}/>
        <Route path={'recipe/:id'} element={<RecipeDetail />}/>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
