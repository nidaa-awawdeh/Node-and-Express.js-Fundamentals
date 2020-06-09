const express = require("express");
const router = express.Router();

const users = [];
var id = 1;

// declare the route first, then all the methods on it
router
  .route("/users")
  .get(() => {
    return res.json(users);
  })
  .post(() => {
    users.push({
      name: req.body.name,
      id: ++id,
    });
    return res.json({ message: "Created" });
  });

router
  .route("/users/:id")
  .get((req, res) => {
    const user = users.find((val) => val.id === Number(req.params.id));
    return res.json(user);
  })
  .patch((req, res) => {
    user.name = req.body.name;
    return res.json({ message: "Updated" });
  })
  .delete((req, res) => {
    users.splice(user.id, 1);
    return res.json({ message: "Deleted" });
  });

module.exports = router;
