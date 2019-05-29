export const getReposName = name => {
  let reposname = name.toLowerCase().trim();
  const URL = `https://api.github.com/users/${reposname}`;
  return fetch(URL).then(res => res.json());
};
