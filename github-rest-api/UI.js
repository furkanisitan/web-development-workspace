class UI {
    constructor() {
        this.profile = document.getElementById("profile");
        this.repos = document.getElementById("repos");
        this.recentUsers = document.getElementById("recent-users");
        this.username = document.getElementById("username");
        this.cardBody = document.querySelector(".card-body");
    }

    clearInput() {
        this.username.value = "";
    }

    showUserInfo(user) {

        this.profile.innerHTML = `
            <div class="card card-body mb-3">
                <div class="row">
                    <div class="col-md-4">
                        <a href="${user.html_url}" target="_blank">
                            <img class="img-fluid mb-2" src="${user.avatar_url}"> 
                        </a>
                        <hr>
                        <div id="fullname"><strong>${user.name}</strong></div>
                        <hr>
                        <div id="bio">${user.bio}</div>
                    </div>
                    <div class="col-md-8">
                        <button class="btn btn-secondary">
                            Followers
                            <span class="badge badge-light">${user.followers}</span>
                        </button>
                        <button class="btn btn-info">
                            Following
                            <span class="badge badge-light">${user.following}</span>
                        </button>
                        <button class="btn btn-danger">
                            Repositories
                            <span class="badge badge-light">${user.public_repos}</span>
                        </button>
                        <hr>
                        <li class="list-group">
                        <li class="list-group-item border-zero">
                            <img src="images/company.png" width="30px">
                            <span id="company">${user.location}</span>
                        </li>
                        <li class="list-group-item border-zero">
                            <img src="images/location.png" width="30px">
                            <span id="location">${user.location}</a>
                        </li>
                        <li class="list-group-item border-zero">
                            <img src="images/mail.png" width="30px">
                            <span id="mail">${user.email}</span>
                        </li>
                    </div>

                </div>
            </div>        
        `;

    }

    showError(message) {

        const div = document.createElement("div");

        div.className = "alert alert-danger";
        div.textContent = message;

        this.cardBody.appendChild(div);
        setTimeout(() => { div.remove() }, 2000);
    }

    showRepoInfo(repos) {

        this.repos.innerHTML = "";

        repos.forEach(repo => {

            this.repos.innerHTML += `
                <div class="mb-2 card-body">
                    <div class="row">
                        <div class="col-md-2">
                            <a href="${repo.html_url}" target="_blank" id="repo-name">${repo.name}</a>
                        </div>
                        <div class="col-md-6">
                            <button class="btn btn-secondary">
                                Stars <span class="badge badge-light" id="repo-star">${repo.stargazers_count}</span>
                            </button>

                            <button class="btn btn-info">
                                Forks <span class="badge badge-light" id="repo-fork">${repo.forks_count}</span>
                            </button>

                        </div>
                    </div>
                </div>
            `;
        });
    }

    addSearchedUserToUI(username) {

        let users = Storage.getSearchedUsersFromStorage();

        if (users.indexOf(username) === -1) {

            const li = document.createElement("li");

            li.className = "list-group-item";
            li.textContent = username;

            this.recentUsers.appendChild(li);
        }
    }

    clearAllSearchedFromUI() {

        while (this.recentUsers.firstElementChild !== null)
            this.recentUsers.removeChild(this.recentUsers.firstElementChild);
    }
}