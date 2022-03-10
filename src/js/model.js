import { GITHUB_CLIENT_ID, GITHUB_CLIENT_SECRET } from './config';

export const state = {
  user: {},
  search: {
    users: [],
    repos: [],
    page: 1,
    numPages: 1,
    resultsPerPage: 5
  }
}

export const getUser = async user => {
  try {
    const response = await fetch(`https://api.github.com/users/${user}?client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}`);
    if(!response.ok) throw new Error(`No user found`);
    const data = await response.json();

    const currentUser = {
      id: data.id,
      login: data.login,
      avatarUrl: data.avatar_url,
      githubProfile: data.html_url,
      name: data.name,
      website: data.blog,
      location: data.location,
      twitter: data.twitter_username,
      description: data.bio,
      followers: data.followers,
      following: data.following,
      publicRepos: data.public_repos
    }

    state.user = currentUser;
    return data;
  } catch(err) {
    console.error(err);
  }
}

export const searchUsers = async query => {
  try {
    const response = await fetch(`https://api.github.com/search/users?q=${query}&client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}`)
    const data = await response.json();
    if(data.total_count === 0) throw new Error('No user found');
    state.search.users = data.items;
  } catch(err) {
    throw err;
  }
}

export const searchUserRepos = async user => {
  try {
    const response = await fetch(`https://api.github.com/users/${user}/repos?sort=created&per_page=3&client_id=${GITHUB_CLIENT_ID}&client_secret=${GITHUB_CLIENT_SECRET}`);
    const data = await response.json();
    state.search.repos = data;
  } catch(err) {
    console.error(err);
  }
}

export const getSearchUserPages = function(page = state.search.page) {
  const start = (page - 1) * state.search.resultsPerPage;
  const end = page * state.search.resultsPerPage;
  state.search.page = page;
  return state.search.users.slice(start, end);
}