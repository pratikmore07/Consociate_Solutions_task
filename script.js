document.getElementById('usernameForm').addEventListener('submit', function(event) {
  event.preventDefault();

  const username = document.getElementById('usernameInput').value;
  fetch(`https://api.github.com/users/${username}`)
    .then(response => response.json())
    .then(data => {
      showUserInfo(data);
    })
    .catch(error => {
      console.error('Error fetching user data:', error);
    });
});

function showUserInfo(user) {
  const userInfoCard = document.getElementById('userInfoCard');
  const avatar = document.getElementById('avatar');
  const username = document.getElementById('username');
  const name = document.getElementById('name');
  const publicRepos = document.getElementById('publicRepos');
  const publicGists = document.getElementById('publicGists');
  const createdAt = document.getElementById('createdAt');

  avatar.src = user.avatar_url;
  username.textContent = user.login;
  name.textContent = user.name || 'Not provided';
  publicRepos.textContent = user.public_repos;
  publicGists.textContent = user.public_gists;
  createdAt.textContent = new Date(user.created_at).toISOString().slice(0, 10);

  userInfoCard.classList.remove('hidden');
}
