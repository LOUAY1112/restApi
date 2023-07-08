const user = require("./modéles/user");
const express = require("express");
const routes = express();
//use(express.json());
routes.get("getallusers", (req, res) => { res.json(user) })
routes.post("adduser", (req, res) => { const newuser = req.body; user.push(newuser); res.status(201).json(user) })
routes.put("edituser/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const updatedUser = req.body;
    const index = user.findIndex((user) => user.id === id);
    if (index !== -1) {
        User[index] = { ...user[index], ...updatedUser };
        res.json(user[index]);
    } else {
        res.status(404).json({ error: "User not found" });
    }
})
routes.delete("deleteuser", (req, res) => {
    const id = parseInt(req.params.id);
    const index = User.findIndex((user) => user.id === id);
    if (index !== -1) {
        user.splice(index, 1);
        res.sendStatus(204);
    } else {
        res.status(404).json({ error: "User not found" });
    }
})
module.exports = routes