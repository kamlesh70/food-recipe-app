import { FETCH_DATA } from "./config.js";
import { getJSON } from "./helper.js";

export const state = {
    recipe:{},
    search:{
        quary: '',
        results:[],
        page:1,
        resultsPerPage: 12
    }
};

export const getRecipe = async (id) => {
   try{ 
   const data = await getJSON(`${FETCH_DATA}/${id}`);
   state.recipe = data.data.recipe;
   }
   catch(err){ 
       console.error(err);
       throw err;
   }
}

export const loadSearchResult = async function(quary) {
   try{
   const res = await fetch(`${FETCH_DATA}/?search=${quary}`);
   const data = await res.json();
   if(data.data.recipes.length==0) throw new Error();
   state.search.quary = quary;
   state.search.results = data.data.recipes;
    }
    catch(err){
        throw err;
    }
}

export const getSearchResultsPage = function(page = state.search.page){
    state.search.page = page;
    const start = (page-1) * state.search.resultsPerPage;
    const end = page * state.search.resultsPerPage;
    return state.search.results.slice(start, end);
}

