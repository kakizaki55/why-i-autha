const fetch = require('cross-fetch');

const exchangeCodeForToken = async (code) => {
  // TODO: Implement me!
  const response = await fetch('https://github.com/login/oauth/access_token', {
    method: 'POST',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      client_id: process.env.CLIENT_ID,
      client_secret: process.env.CLIENT_SECRET,
      code,
    }),
  });
  const { access_token } = await response.json();
  return access_token;
};

const getGithubProfile = async (token) => {
  const profileResponse = await fetch('https://api.github.com/user', {
    headers: {
      Authorization: `token ${token}`,
    },
  });
  return await profileResponse.json();
};

module.exports = { exchangeCodeForToken, getGithubProfile };
