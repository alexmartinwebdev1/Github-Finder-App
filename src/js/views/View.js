export default class View {
  _data;

  render(data) {
    this._data = data;
    const markup = this._generateMarkup();
    this._clear();
    this._parentElement.insertAdjacentHTML('afterbegin', markup);
  }

  renderSpinner() {
    this._clear();
    const spinner = `<i class="fa-solid fa-spinner spinner"></i>`;
    this._parentElement.insertAdjacentHTML('afterbegin', spinner);
  }

  _clear() {
    this._parentElement.innerHTML = '';
  }

  renderError() {
    document.querySelector('.users-preview').innerHTML = `
      <h2 class="error">No users found. Try again ;)</h2>
    `;
  }
}