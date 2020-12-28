class Github {

    constructor() {
        this.url = "https://api.github.com/users/";
    }

    async getGithubData(username) {

        const [responseUser, responseRepo] = await Promise.all([
            fetch(this.url + username),
            fetch(this.url + username + "/repos")
        ]);

        return {
            user: await responseUser.json(),
            repo: await responseRepo.json()
        }
    }
}