const fetch = require(".async-2.test");

const fetcher = function(repoName) {
  return fetch(repoName).then(data => data.json());
};

module.exports = fetcher;
