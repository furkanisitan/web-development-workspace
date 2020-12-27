class Request {

    constructor() {
        this.xhr = new XMLHttpRequest();
    }

    get(url, callback) {

        this.xhr.open("GET", url);

        // this.xhr.onload = function () {

        //     // fonksiyon içindeki this, this.xhr'ı gösteriyor.
        //     // this.xhr.status, this.status olarak yazılmalı ya da bind(this) kullanılmalı
        //     this.xhr.status === 200 ? callback(null, this.xhr.responseText) : callback(this.xhr.statusText, null);

        // }.bind(this);

        // arrow function varsayılan olarak .bind(this) kullanır
        this.xhr.onload = () => this.xhr.status === 200 ? callback(null, this.xhr.responseText) : callback("GET request: an error occurred", null);
        this.xhr.send();
    }

    post(url, data, callback) {

        this.xhr.open("POST", url);
        this.xhr.setRequestHeader("Content-type", "application/json");
        this.xhr.onload = () => this.xhr.status === 201 ? callback(null, this.xhr.responseText) : callback("POST request: an error occurred", null);
        this.xhr.send(JSON.stringify(data));
    }

    put(url, data, callback) {

        this.xhr.open("PUT", url);
        this.xhr.setRequestHeader("Content-type", "application/json");
        this.xhr.onload = () => this.xhr.status === 200 ? callback(null, this.xhr.responseText) : callback("PUT request: an error occurred", null);
        this.xhr.send(JSON.stringify(data));
    }

    delete(url, callback) {

        this.xhr.open("DELETE", url);
        this.xhr.onload = () => this.xhr.status === 200 ? callback(null, "Data delete operation is successful!") : callback("DELETE request: an error occurred", null);
        this.xhr.send();
    }
}

const request = new Request();

// request.get("https://jsonplaceholder.typicode.com/albums", (err, res) => {
//     console.log(err ?? res);
// });

// request.post("https://jsonplaceholder.typicode.com/albums", { userId: 2, title: "test" }, (err, res) => {
//     console.log(err ?? res);
// });

// request.put("https://jsonplaceholder.typicode.com/albums/2", { userId: 4, title: "test 3" }, (err, res) => {
//     console.log(err ?? res);
// });

// request.delete("https://jsonplaceholder.typicode.com/albums/12", (err, res) => {
//     console.log(err ?? res);
// });