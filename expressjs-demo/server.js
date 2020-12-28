const express = require("express");
const { accessControl, logger } = require("./middleware.js")

const app = express();
const PORT = 3001;
const users = [
    { id: 1, name: "Harmon Baxter", place: "Hemlock" },
    { id: 2, name: "Antoinette Holmes", place: "Gloucester" },
    { id: 3, name: "Barton Colon", place: "Corinne" },
    { id: 4, name: "Latasha Bowman", place: "Blende" },
    { id: 5, name: "Carolina Rivas", place: "Fairlee" }
];

// requestHandler metodlarında req.body değişkenine, gönderilen veriyi ekler
app.use(express.json());

// tüm requestlere middleware uygular
// app.use(accessControl);

// GET http://localhost:3001/users
// accessControl, logger => middleware
app.get("/users", accessControl, logger, (req, res, next) => {
    res.json(users);
});

// POST http://localhost:3001/users
app.post("/users", (req, res, next) => {
    users.push(req.body);
    res.json({
        success: true,
        message: "Adding is successful!"
    });
});

// PUT http://localhost:3001/users/{id}
app.put("/users/:id", (req, res, next) => {
    const id = parseInt(req.params.id);

    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            users[i] = { ...users[i], ...req.body }
            break;
        }
    }
    res.json({
        success: true,
        message: "Updating is successful!"
    });
});

// DELETE http://localhost:3001/users/{id}
app.delete("/users/:id", (req, res, next) => {
    const id = parseInt(req.params.id);

    for (let i = 0; i < users.length; i++) {
        if (users[i].id === id) {
            users.splice(i, 1);
            break;
        }
    }
    res.json({
        success: true,
        message: "Deleting is successful!"
    });
});

app.listen(PORT, () => console.log(`Server Started PORT: ${PORT}`))
