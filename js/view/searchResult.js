import view from "./view.js";
 
class searchResult extends view{
    _parentElement = document.querySelector(".results");

    _generateMarkup(){
        const arr =  this._data.map(ele => {
            return (
            `<li class="preview">
            <a class="preview__link preview__link--active" href=#${ele.id}>
              <figure class="preview__fig">
                <img src=${ele.image_url} alt="Test" />
              </figure>
              <div class="preview__data">
                <h4 class="preview__title">${ele.title} </h4>
                <p class="preview__publisher">${ele.publisher}</p>
              </div>
            </a>
          </li>`);
        })
        return arr.join('');
    }
}

export default new searchResult();
