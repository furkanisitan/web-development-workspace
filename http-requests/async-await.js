class Request {

    async get(url) {
        const res = await fetch(url);
        return await res.json();
    }

    async post(url, data) {
        const res = await fetch(url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json" }
        });
        return await res.json();
    }

    async put(url, data) {
        const res = await fetch(url, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json" }
        });
        return await res.json();
    }

    async delete(url) {
        await fetch(url, { method: 'DELETE' })
        return "Data delete operation is successful!";
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
