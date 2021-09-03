import * as model from "./model.js";
import recipeView from "./view/recipeView.js";
import searchView from "./view/searchView.js";
import searchResult from "./view/searchResult.js";
import paginationView from "./view/paginationView.js";

const handleRecipe = async () => {
  try{
  const id = window.location.hash.slice(1);
  if(!id) return;
  recipeView.showSpinner();
  await model.getRecipe(id);
  const recipe = model.state.recipe;
  recipeView.getData(recipe);
  }
    catch(err){
        recipeView.handleError();
    }
};

const controlSearchResult = async function(){
  try{
    searchResult.showSpinner();
    const query = searchView.getQuery();
    if(!query) return;
    searchView.clearSearch();
    await model.loadSearchResult(query);
    // searchResult.getData(model.state.search.results);
    searchResult.getData(model.getSearchResultsPage(1));
    paginationView.getData(model.state.search);
  }
  catch(err){
    searchResult.handleError();
  }
}

const controlPagination = function(page){
 searchResult.getData(model.getSearchResultsPage(page));
 paginationView.getData(model.state.search);
}
const init = () => recipeView.eventHandler(handleRecipe);
searchView.addHandlerSearch(controlSearchResult);
paginationView.handleBtnClick(controlPagination);
init();