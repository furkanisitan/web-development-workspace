const form = document.getElementById("form-github");
const username = document.getElementById("username");
const clearRecentUsers = document.getElementById("clear-recent-users");
const recentUsers = document.getElementById("recent-users");
const github = new Github();
const ui = new UI();

eventListeners();

function eventListeners() {
    form.addEventListener("submit", getData);
    clearRecentUsers.addEventListener("click", clearAllSearched);
    document.addEventListener("DOMContentLoaded", getAllSearched);
}

function getData(e) {

    let userName = username.value.trim();

    if (!userName)
        alert("Please enter a valid username!");

    else {

        github.getGithubData(userName)
            .then(response => {
                if (response.user.message === "Not Found")
                    ui.showError("User not found!");
                else {
                    ui.addSearchedUserToUI(userName);
                    Storage.addSearchedUserToStorage(userName);
                    ui.showUserInfo(response.user);
                    ui.showRepoInfo(response.repo);
                }
            })
            .catch(err => ui.showError(err));
    }

    ui.clearInput();
    e.preventDefault();
}

function clearAllSearched() {
    if (confirm("Are you sure?")) {
        Storage.clearAllSearchedUsersFromStorage();
        ui.clearAllSearchedFromUI();
    }
}

function getAllSearched() {

    let users = Storage.getSearchedUsersFromStorage();
    let result = "";
    users.forEach(user => {
        result += `<li class="list-group-item">${user}</li>`;
    });
    recentUsers.innerHTML = result;
}
