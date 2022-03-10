import View from './View';

class reposView extends View {
  _parentElement = document.querySelector('.repos');

  _generateMarkup() {
    return this._data.map(repo => {
      return `
      <a href='${repo.html_url}' target="_blank">
        <div class="repo">
          <h6><i class="fa-solid fa-code"></i> <span class="repo-title">${repo.name}</span></h6>
          <p class="repo-desc">${repo.description ? repo.description : 'No description available'}</p>
          <div class="repo-stats">
            <div class="repo-stat">
              <i class="fa-solid fa-eye"></i>
              <span class="repo-stat-number">${repo.watchers_count}</span>
            </div>
            <div class="repo-stat">
              <i class="fa-solid fa-star"></i>
              <span class="repo-stat-number">${repo.stargazers_count}</span>
            </div>
          </div>
        </div>
      </a>
      `;
    }).join('');
  }
}

export default new reposView();