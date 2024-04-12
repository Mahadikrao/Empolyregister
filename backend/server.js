const express = require("express");
const mongoose = require("./Db");
const bcrypt = require("bcrypt");
const User = require("./models/User");
const cors = require("cors");
const authController = require("./authController");
const verifyToken = require("./authMiddleware");
const signupController = require("./signup_controller");

const app = express();
const router = express.Router(); // Create a router instance

const port = 3000;

app.use(cors());
app.use(express.json());

// Define routes using the router
router.post("/login", authController.login);
router.post("/signup", signupController.signup);
router.get("/protected", verifyToken, (req, res) => {
  res.json({ message: "Access to protected route granted", user: req.user });
});

// Mount the router on the app
app.use("/", router);

app.listen(port, () => {
  console.log(`Server is started at ${port}`);
});
