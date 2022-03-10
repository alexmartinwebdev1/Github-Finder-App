import View from './View';

class paginationView extends View {
  _parentElement = document.querySelector('.pagination-buttons');

  addPaginationHandler(handler) {
    this._parentElement.addEventListener('click', e => {
      const btn = e.target.closest('.page');
      if(!btn) return;
      const searchPage = +btn.dataset.goto;
      handler(searchPage);
    });
  }

  _generateMarkup() {
    const currentPage = this._data.search.page;
    const numPages = Math.ceil(this._data.search.users.length / this._data.search.resultsPerPage);
    
    if(this._data.search.page === 1 && numPages > 1) {
      return `
        <button class="page page-next" data-goto=${currentPage + 1}>Page ${currentPage + 1} <i class="fa-solid fa-arrow-right"></i></button>
      `;
    }

    if (this._data.search.page === numPages && numPages > 1) {
      return `
        <button class="page page-prev" data-goto=${currentPage - 1}><i class="fa-solid fa-arrow-left"></i> Page ${currentPage - 1}</button>`;
    }

    if (this._data.search.page !== 1 && numPages > 1) {
      return `
        <button class="page page-prev" data-goto=${currentPage - 1}><i class="fa-solid fa-arrow-left"></i> Page ${currentPage - 1}</button>
        <button class="page page-next" data-goto=${currentPage + 1}>Page ${currentPage + 1} <i class="fa-solid fa-arrow-right"></i></button>
      `;
    }

    return ``;
  }
}

export default new paginationView();