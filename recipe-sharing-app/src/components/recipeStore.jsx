import create from 'zustand'

const useRecipeStore = create((set) => ({
  recipes: [],
  addRecipe: (newRecipe) => set((state) => ({ recipes: [...state.recipes, newRecipe] })),
  setRecipes: (recipes) => set({ recipes }),
  //Optional:  add a function to initialize recipes from some data source
  initRecipes: (initialRecipes) => set({recipes: initialRecipes})
}));

export default useRecipeStore;

