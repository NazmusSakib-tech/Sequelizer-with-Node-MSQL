const express = require("express");
const cors = require("cors");

const app = express();

var coreOptions = {
  origin: "http://localhost:8081",
};

// middlewares
app.use(express.json());
app.use(cors(coreOptions));
app.use(
  express.urlencoded({
    extended: true,
  })
);

const userRouter = require("./routes/userRouter");

app.use("/api/v1/users", userRouter);

// get api
app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT || 7000;

app.listen(PORT, console.log(`Server is running on port ${PORT}`));
