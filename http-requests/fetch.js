class Request {

    get(url) {
        return fetch(url).then(res => res.json())
    }

    post(url, data) {
        return fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json" }
        }).then(res => res.json());
    }

    put(url, data) {
        return fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json" }
        }).then(res => res.json());
    }

    delete(url) {
        return fetch(url, { method: 'DELETE' }).then(_ => "Data delete operation is successful!");
    }
}

const request = new Request();

// request.get("https://jsonplaceholder.typicode.com/albums")
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

// request.post("https://jsonplaceholder.typicode.com/albums", { userId: 2, title: "test" })
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

// request.put("https://jsonplaceholder.typicode.com/albums/2", { userId: 54, title: "test 2" })
//     .then(res => console.log(res))
//     .catch(err => console.log(err));

// request.delete("https://jsonplaceholder.typicode.com/albums/2")
//     .then(res => console.log(res))
//     .catch(err => console.log(err));