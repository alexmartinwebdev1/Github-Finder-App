class SearchView {
  _parentElement = document.querySelector('.search-form');

  addFormHandler(handler) {
    this._parentElement.addEventListener('submit', e => {
      e.preventDefault();
      const searchUser = this._parentElement.querySelector('input').value;
      handler(searchUser);
      this._parentElement.querySelector('input').value = '';
    })
  }
}

export default new SearchView();