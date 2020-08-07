const express = require("express");
const router = express.Router();
const Client = require("../model/Client");
const Rooms = require("../model/Rooms");

router.get("/", (req, res) => {
  res.render("index");
});
// router.get("/:id", getClient, (req, res) => {
//   res.json(res.client);
// });
router.post("/", async (req, res) => {
  const client = new Client({
    checkin: req.body.checkin,
    checkout: req.body.checkout,
    adults: req.body.adults,
  });
  try {
    const newClient = await client.save();
    res.redirect(`/rooms/${newClient.id}`);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});
router.get("/rooms", async (req, res) => {
  const rooms = await Rooms.find({});
  try {
    res.render("rooms", {
      booked: false,
      rooms,
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
  }
});
router.get("/rooms/:id", async (req, res) => {
  const rooms = await Rooms.find({ available: true });
  try {
    const client = await Client.findById(req.params.id);
    res.render("rooms", {
      booked: true,
      checkin: client.checkin,
      checkout: client.checkout,
      adults: client.adults,
      rooms,
    });
  } catch (err) {
    res.status(404).json({ message: err.message });
    console.log(err);
  }
});

module.exports = router;
