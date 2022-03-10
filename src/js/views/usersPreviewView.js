import View from './View';

class usersPreviewView extends View {
  _parentElement = document.querySelector('.users-preview');

  addUserDisplayHandler(handler) {
    this._parentElement.addEventListener('click', function(e) {
      const preview = e.target.closest('.user-preview');
      if (!preview) return;
      const user = preview.dataset.name;
      handler(user);
    });
  }

  _generateMarkup() {
    return this._data.map(user => {
      return `
      <li class="user-preview-item">
        <a href="#" class="user-preview" data-name=${user.login}>
          <img src="${user.avatar_url}" alt="${user.login} Photo">
          <h6>${user.login}</h6>
        </a>
      </li>
      `
    }).join('');
  }
}

export default new usersPreviewView();