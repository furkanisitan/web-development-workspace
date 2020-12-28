export class Request {

    constructor(url) {
        this.url = url;
    }

    async get() {
        const res = await fetch(this.url);
        return await res.json();
    }

    async post(data) {
        const res = await fetch(this.url, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        });
        return await res.json();
    }

    async put(id, data) {
        const res = await fetch(`${this.url}/${id}`, {
            method: 'PUT',
            body: JSON.stringify(data),
            headers: { "Content-type": "application/json; charset=UTF-8" }
        });
        return await res.json();
    }

    async delete(id) {
        await fetch(`${this.url}/${id}`, { method: 'DELETE' })
        return "Data delete operation is successful!";
    }
}
