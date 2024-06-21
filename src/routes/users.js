const express = require("express");
const UserRepo = require("../repos/user-repo");
const status = require("http-status");

const router = express.Router();

router.get("/", async (req, res) => {
  const users = await UserRepo.find();

  res.send(users);
});
router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const user = await UserRepo.findById(id);

  if (user) {
    res.send(user);
  } else {
    res.sendStatus(status.NOT_FOUND);
  }
});

router.post("/", async (req, res) => {
  const { username, bio } = req.body;

  const user = await UserRepo.insert(username, bio);

  res.send(user);
});

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const { username, bio } = req.body;

  const user = await UserRepo.update(id, username, bio);

  if (user) {
    res.send(user);
  } else {
    res.sendStatus(status.NOT_FOUND);
  }
});

router.delete("/:id", async (req, res) => {
  const { id } = req.params;

  const user = await UserRepo.delete(id);

  if (user) {
    res.send(user);
  } else {
    res.sendStatus(status.NOT_FOUND);
  }
});

module.exports = router;
