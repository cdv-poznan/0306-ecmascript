/*
const promise = fetch("https://api.github.com/users/juszczak");

console.log(promise);

promise.then((response) => response.json()).then((data) => console.log(data));

const promises = [
  fetch("https://api.github.com/users/juszczak"),
  fetch("https://api.github.com/users/imegoff"),
  fetch("https://api.github.com/users/cusspvz"),
];

const all = Promise.all(promises);

all.then((results) => {
  console.log('from all', results);
});

const race = Promise.race(promises);

race.then((result) => {
  console.log('from race', result);
});
*/

function getUser2(name) {
  return fetch(`https://api.github.com/users/${name}`)
    .then((response) => response.json())
    .then((user) =>
      fetch(user.followers_url).then((response) => response.json())
    );
}

async function getUser(name) {
  const response = await fetch(`https://api.github.com/users/${name}`);
  const user = await response.json();
  const followersResponse = await fetch(user.followers_url);
  return followersResponse.json();
}

getUser("juszczak").then(console.log);
