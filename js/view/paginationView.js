import view from "./view.js";

class paginationView extends view{
    _parentElement = document.querySelector(".pagination");
    
    handleBtnClick(handler){
        this._parentElement.addEventListener('click', function(event){
            const btn = event.target.closest(".btn--inline");
            if(!btn) return;
            handler(+btn.dataset.goto);

        })
    }
    _generateMarkup(){
        const numPages = Math.ceil(this._data.results.length / this._data.resultsPerPage);
        
        if(this._data.page === 1 && numPages > 1){

          return `<button data-goto=${this._data.page + 1} class="btn--inline pagination__btn--next">
          <span>page${this._data.page + 1}</span>
          <svg class="search__icon">
            <use href="icons.svg#icon-arrow-right"></use>
          </svg>
        </button>`;
        }  

        if(this._data.page === numPages && numPages > 1){
            return `<button data-goto=${this._data.page - 1} class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="icons.svg#icon-arrow-left"></use>
            </svg>
            <span>page${this._data.page - 1}</span>
          </button>`;
        }
        if(this._data.page < numPages){
            return `<button data-goto=${this._data.page + 1} class="btn--inline pagination__btn--next">
            <span>page${this._data.page + 1}</span>
            <svg class="search__icon">
              <use href="icons.svg#icon-arrow-right"></use>
            </svg>
          </button>
          <button data-goto=${this._data.page - 1} class="btn--inline pagination__btn--prev">
            <svg class="search__icon">
              <use href="icons.svg#icon-arrow-left"></use>
            </svg>
            <span>page${this._data.page - 1}</span>
          </button>`;
        }
         
        return "";

    }   

}

export default new paginationView();