export const getReposName = name => {
  let reposname = name.toLowerCase().trim();
  const URL = `https://api.github.com/users/${reposname}/repos?per_page=100`;
  return fetch(URL).then(res => res.json());
};

// https://api.github.com/users/petervnguyen/repos?per_page=100
// https://api.github.com/users/${reposname}
