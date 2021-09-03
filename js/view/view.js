export default class view{
    _error_message = "this recipe is not found please try some other recipe!!!";
  _data;
  getData = (data)=>{
      this._data = data;
      const markup = this._generateMarkup();
      this._parentElement.innerHTML ="";
      this._parentElement.insertAdjacentHTML("afterbegin", markup); 
  }
  showSpinner() {
    this._parentElement.innerHTML = "";
    const spinner = `<div class="spinner">
          <svg>
            <use href="icons.svg#icon-loader"></use>
          </svg>
        </div>`;
    this._parentElement.insertAdjacentHTML("afterbegin", spinner);
  };
   
  handleError(){
      const markup = `<div class="error">
      <div>
        <svg>
          <use href="icons.svg#icon-alert-triangle"></use>
        </svg>
      </div>
      <p>${this._error_message}</p>
    </div>`
    this._parentElement.innerHTML ="";
    this._parentElement.insertAdjacentHTML("afterbegin", markup); 
  }
}