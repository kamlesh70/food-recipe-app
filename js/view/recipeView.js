import view from "./view.js";

class recipeView extends view {
  _parentElement = document.querySelector(".recipe");

  eventHandler(handledEvent){
    ['hashchange', 'load'].forEach(el => {
        window.addEventListener(el, handledEvent);
    });
} 
   
  handleServingBtn(){
    this._parentElement.addEventListener('click', function(event){
      const btn = event.target.closest('.btn--tiny');
      if(!btn) return;
      const servingType = btn.dataset.serving;
      if(servingType === "increase"){

      }
      if(servingType === "decrease"){

      }
    })
  }
    _generateMarkup() {
      return `<figure class="recipe__fig">
        <img src="${this._data.image_url}"alt=${this._data.title} class="recipe__img" />
        <h1 class="recipe__title">
          <span>${this._data.title}</span>
        </h1>
      </figure>
      <div class="recipe__details">
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="icons.svg#icon-clock"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--minutes">${
            this._data.cooking_time
          }</span>
          <span class="recipe__info-text">minutes</span>
        </div>
        <div class="recipe__info">
          <svg class="recipe__info-icon">
            <use href="icons.svg#icon-users"></use>
          </svg>
          <span class="recipe__info-data recipe__info-data--people">${
            this._data.servings
          }</span>
          <span class="recipe__info-text">servings</span>
          <div class="recipe__info-buttons">
            <button data-serving="increase" class="btn--tiny btn--increase-servings">
              <svg>
                <use href="icons.svg#icon-minus-circle"></use>
              </svg>
            </button>
            <button data-serving="decrease" class="btn--tiny btn--increase-servings">
              <svg>
                <use href="icons.svg#icon-plus-circle"></use>
              </svg>
            </button>
          </div>
        </div>
        <button class="btn--round">
          <svg class="">
            <use href="icons.svg#icon-bookmark-fill"></use>
          </svg>
        </button>
      </div>
      <div class="recipe__ingredients">
        <h2 class="heading--2">Recipe ingredients</h2>
        <ul class="recipe__ingredient-list">
          ${this._data.ingredients
            .map((ele) => {
              return `<li class="recipe__ingredient">
            <svg class="recipe__icon">
              <use href="icons.svg#icon-check"></use>
            </svg>
            <div class="recipe__quantity">${ele.quantity?ele.quantity:''}</div>
            <div class="recipe__description">
              <span class="recipe__unit">${ele.unit}</span>
              ${ele.description}
            </div>
          </li>`;
            })
            .join("")}
        </ul>
      </div>
      <div class="recipe__directions">
        <h2 class="heading--2">How to cook it</h2>
        <p class="recipe__directions-text">
          This recipe was carefully designed and tested by
          <span class="recipe__publisher">The Pioneer Woman</span>. Please check out
          directions at their website.
          </p>
        <a
          class="btn--small recipe__btn"
          href=${this._data.source_url}
          target="_blank"
        >
          <span>Directions</span>
          <svg class="search__icon">
            <use href="icons.svg#icon-arrow-right"></use>
          </svg>
        </a>
      </div>`;
    
        }
     

}

export default new recipeView();