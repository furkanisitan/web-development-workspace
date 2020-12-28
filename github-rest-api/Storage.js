class Storage {

    static getSearchedUsersFromStorage() {
        return localStorage.getItem("searched") === null ? [] : JSON.parse(localStorage.getItem("searched"));
    }

    static addSearchedUserToStorage(username) {

        let users = this.getSearchedUsersFromStorage();

        if (users.indexOf(username) === -1)
            users.push(username);

        localStorage.setItem("searched", JSON.stringify(users));
    }

    static clearAllSearchedUsersFromStorage() {
        localStorage.removeItem("searched");
    }

}