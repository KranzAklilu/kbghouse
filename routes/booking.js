const express = require("express");
const router = express.Router();
const Client = require("../model/Client");

router.get("/", async (req, res) => {
  res.status(200).render("index", {
    styles: "index.css",
  });
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
    res.redirect(`/rooms${newClient.id}`);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

router.get("/rooms:id", async (req, res) => {
  const rooms = require("../public/js/rooms");
  try {
    const client = await Client.findById(req.params.id);
    res.render("rooms", {
      styles: "rooms.css",
      checkin: client.checkin,
      checkout: client.checkout,
      adults: client.adults,
      rooms,
    });
  } catch (err) {
    res.status(404).redirect("/");
  }
});

module.exports = router;
