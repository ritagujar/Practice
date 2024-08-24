let inputBox = document.querySelector(".form_container");
let inputTxt = document.querySelector(".input_txt");
let profileImg = document.querySelector("img");
let userName = document.querySelector(".user_name");
let userBio = document.querySelector(".user_bio");
let followersCount = document.querySelector(".followers_count");
let followingsCount = document.querySelector(".following_count");
let userRepos = document.querySelector(".repos");
let pinnedProjects = document.querySelector(".pinned_projects");

const baseURL = "https://api.github.com/users/";

async function getUser(user) {
  try {
    let response = await fetch(baseURL + user);
    let data = await response.json();
    // console.log(data);

    userName.textContent = data.name;
    profileImg.src = data.avatar_url;
    userBio.innerHTML = data.bio;
    followersCount.innerHTML = data.followers;
    followingsCount.innerHTML = data.following;
    userRepos.innerHTML = data.public_repos;
  } catch (error) {
    if (error.response.status === 404) {
      alert("This account doesn't exist");
      window.location.reload();
    }
  }
}

inputBox.addEventListener("submit", (e) => {
  e.preventDefault();
  let user = inputTxt.value;

  console.log(user);

  getUser(user);
  getRepositories(user);
  document.querySelector(".profile_info").style.visibility = "visible";
});

async function getRepositories(user) {
  try {
    let response = await fetch(baseURL + user + "/repos?sort=created");
    let data = await response.json();

    console.log(data);

    let repoList = "";

    for (let i = 0; i < 5; i++) {
      repoList += `<a href="${data[i].html_url}" target="_blank">${data[i].name}</a>`;
    }

    pinnedProjects.innerHTML = repoList;
  } catch (error) {
    if (error.response.status === 404) {
      alert("This user doesn't exist");
      window.location.reload;
    }
  }
}
