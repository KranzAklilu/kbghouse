const Rooms = require("../../model/Rooms");

const rooms = new Rooms(
  {
    name: "room01",
    kind: "presidential suite",
    bed: 2,
    price: "40$",
    available: false,
  },
  {
    name: "room04",
    kind: "twin",
    bed: 2,
    price: "30$",
    available: false,
  },
  {
    name: "room02",
    kind: "mini suite",
    bed: 4,
    price: "50$",
    available: true,
  },
  {
    name: "room03",
    kind: "single bed",
    bed: 1,
    price: "10$",
    available: true,
  }
);
console.log(rooms);
module.exports = rooms;
