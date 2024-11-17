import React from 'react';
import Header from './Header';
import MainContent from './MainContent';
import Footer from './Footer';
import UserProfile from './components/UserProfile';
import Home from '../../my-company/Home';
import About from '../../my-company/About';
import Services from '../../my-company/Services';
import Contact from '../../my-company/Contact';
import Navbar from '../../my-company/Navbar';
import { BrowserRouter } from 'react-router-dom';
import React from 'react';
import AddRecipeForm from './components/AddRecipeForm';
import RecipeList from './components/RecipeList';
import useRecipeStore from './components/recipeStore';


function App() {
  const initRecipes = useRecipeStore(state=> state.initRecipes)

  // Example initial recipes (optional, remove if not needed)
  const initialRecipesData = [
    { id: 1, title: 'Pasta Carbonara', description: 'Classic Italian pasta dish.' },
    { id: 2, title: 'Chocolate Chip Cookies', description: 'Sweet and delicious cookies.' },
  ];

  // Initialize Recipes, only if initial data is provided
  if(initialRecipesData){
    initRecipes(initialRecipesData)
  }


  return (
    <div className="App">
      <h1>Recipe App</h1>
      <AddRecipeForm />
      <RecipeList />
    </div>
  );
}

export default App;



function App() {
  return (
    <div>
      <Router>
  <Navbar />
  {/* Other routes */}
</Router>

      <Home/>
      <About/>
      <Services/>
      <Contact/>
      
      <Header />
      <MainContent />
      <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
      <Footer />
    </div>
  );
}

export default App;
