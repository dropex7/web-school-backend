const express = require("express");
const config = require("config");
const PORT = config.get("port");
const cors = require("cors");
const app = express();

// const users = [{
//         "login": "nova",
//         "password": "123456"
//     },
//     {
//         "login": "nova",
//         "password": "123456"
//     },
//     {
//         "login": "nova",
//         "password": "123456"
//     },
//     {
//         "login": "nova",
//         "password": "123456"
//     }
// ]
// юзаем БД

const courses = [
  {
    language: "C",
    lessons: [
      {
        name: "Lesson 1",
        url: "vk.com",
        image:
          "https://sun9-4.userapi.com/slQd-NSY0RHZilsEIj7RJdv9Kr5dejeCodMX0w/EZUG2Sw4MTg.jpg",
      },
      {
        name: "Lesson 2",
        url: "vk.com",
        image:
          "https://sun9-4.userapi.com/slQd-NSY0RHZilsEIj7RJdv9Kr5dejeCodMX0w/EZUG2Sw4MTg.jpg",
      },
      {
        name: "Lesson 3",
        url: "vk.com",
        image:
          "https://sun9-4.userapi.com/slQd-NSY0RHZilsEIj7RJdv9Kr5dejeCodMX0w/EZUG2Sw4MTg.jpg",
      },
    ],
  },
  {
    language: "Java",
    lessons: [
      {
        name: "Lesson 1",
        url: "vk.com",
        image:
          "https://sun9-4.userapi.com/slQd-NSY0RHZilsEIj7RJdv9Kr5dejeCodMX0w/EZUG2Sw4MTg.jpg",
      },
      {
        name: "Lesson 2",
        url: "vk.com",
        image:
          "https://sun9-4.userapi.com/slQd-NSY0RHZilsEIj7RJdv9Kr5dejeCodMX0w/EZUG2Sw4MTg.jpg",
      },
      {
        name: "Lesson 3",
        url: "vk.com",
        image:
          "https://sun9-4.userapi.com/slQd-NSY0RHZilsEIj7RJdv9Kr5dejeCodMX0w/EZUG2Sw4MTg.jpg",
      },
    ],
  },
];

app.use(cors());
app.options("*", cors());
app.use(express.json({ extended: true }));
app.use("/api", require("./routes/main.routes"));
app.use("/auth", require("./routes/auth.routes"));

app.get("/courses", (req, res) => {
  res.send(courses);
});

async function start() {
  try {
    app.listen(PORT, () => console.log("APP HAS BEEN STARTED."));
  } catch (e) {
    console.log("Server error: ", e.message);
    process.exit(1);
  }
}

start();
