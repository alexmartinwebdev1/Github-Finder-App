import 'regenerator-runtime/runtime';
import * as model from './model';
import userView from './views/userView';
import usersPreviewView from './views/usersPreviewView';
import searchView from './views/searchView';
import reposView from './views/reposView';
import paginationView from './views/paginationView';

const controlDisplayUser = async (user) => {
  try {
    reposView._clear();
    userView.renderSpinner();
    await model.getUser(user);
    userView.render(model.state.user);
    
    reposView.renderSpinner();
    await model.searchUserRepos(model.state.user.login);
    reposView.render(model.state.search.repos);
  } catch (err) {
    console.error(err);
  }
}

const controlSearchUsers = async user => {
  try {
    paginationView._clear();
    usersPreviewView.renderSpinner();
    await model.searchUsers(`${user}`);
    usersPreviewView.render(model.getSearchUserPages());
    paginationView.render(model.state);
  } catch(err) {
    usersPreviewView.renderError();
  }
}

const controlPagination = (page) => {
  try {
    usersPreviewView.render(model.getSearchUserPages(page));
    paginationView.render(model.state);
  } catch(err) {
    console.error(err);
  }
}

const init = () => {
  searchView.addFormHandler(controlSearchUsers);
  usersPreviewView.addUserDisplayHandler(controlDisplayUser);
  paginationView.addPaginationHandler(controlPagination);
}

init();