use bookingsdb;
db.dropDatabase();

db.bookings.insertMany([
  {
    name: "Davey Attenborough",
    email: "davey@animalwatching.com",
    checkedIn: true
  },
  {
    name: "Amanda Williamson",
    email: "amanda@gmail.com",
    checkedIn: false
  },
  {
    name: "Cameron Pellett",
    email: "cammy@gmail.com",
    checkedIn: false
  }
]);