

class SearchView{
  _parentElement = document.querySelector(".search");

  getQuery(){
      return document.querySelector(".search__field").value;
  }
  addHandlerSearch(handler){
      this._parentElement.addEventListener('submit', function(event){
          event.preventDefault();
          handler();
      })
  }
  clearSearch(){
    document.querySelector(".search__field").value = "";
  }

}
export default new SearchView();