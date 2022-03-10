import mainImage from 'url:../../img/big.png';
import View from './View';

class UserView extends View {
  _parentElement = document.querySelector('.main-top');

  clearContainer() {
    this.document.querySelector('.main-right').innerHTML = '';
  }

  _generateMarkup() {
    return `
        <div class="main-image">
        <img src="${this._data.avatarUrl}" alt="${this._data.name} Image">
        <a href="${this._data.githubProfile}" target="_blank" class="go-to-profile">Go to Github Profile</a>
        </div>
        <div class="main-content">
          <h2 class="main-name">${this._data.name} <span class="main-username">( ${this._data.login} )</span></h2>
          <p class="main-description">${this._data.description ? this._data.description : 'No description available'}</p>
          <div class="info">
            <ul class="user-info">
              <li><i class="fa-solid fa-circle-dot"></i> Location: <span>${this._data.location ? this._data.location : 'No location available'}</span></li>
              <li><i class="fa-solid fa-circle-dot"></i> Website: <span>${this._data.website ? this._data.website : 'No website available'}</span></li>
              <li><i class="fa-solid fa-circle-dot"></i> Twitter: <span>${this._data.twitter ? this._data.twitter : 'No twitter available'}</span></li>
            </ul>
          </div>
          <div class="stats">
            <div class="stat">
              <div class="stat-name-number">
                <h6>Followers</h6>
                <p>${this._data.followers}</p>
              </div>
              <div class="stat-icon">
                <i class="fa-solid fa-users"></i>
              </div>
            </div>
            <div class="stat">
              <div class="stat-name-number">
                <h6>Following</h6>
                <p>${this._data.following}</p>
              </div>
              <div class="stat-icon">
                <i class="fa-solid fa-user"></i>
              </div>
            </div>
            <div class="stat">
              <div class="stat-name-number">
                <h6>Public Repos</h6>
                <p>${this._data.publicRepos}</p>
              </div>
              <div class="stat-icon">
                <i class="fa-solid fa-code-branch"></i>
              </div>
            </div>
          </div>
        </div>
    `;
  }
}

export default new UserView();