const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken"); // Import the JWT library
const User = require("./models/User"); // Import your User model

// Secret key for JWT token signing
const JWT_secretKey = "your_secret_key"; // Replace with your secret key

async function login(req, res) {
  const { username, password } = req.body;

  try {
    // Find the user by username
    const user = await User.findOne({ username });

    // If user doesn't exist, return an error
    if (!user) {
      return res
        .status(400)
        .json({ message: "Username or password is incorrect" });
    }

    // Compare the provided password with the hashed password in the database
    const isPasswordValid = await bcrypt.compare(password, user.password);

    // If passwords don't match, return an error
    if (!isPasswordValid) {
      return res
        .status(400)
        .json({ message: "Username or password is incorrect" });
    }

    // If authentication is successful, generate a JWT token
    const token = generateToken(user);

    // Send the token along with the success message
    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error in login:", error.message);
    res.status(500).json({ message: "Internal server error" });
  }
}
// Middleware function to verify JWT token
// Function to generate JWT token
function generateToken(user) {
  try {
    // Generate JWT token with user's ID and username as payload
    const token = jwt.sign(
      { userId: user._id, username: user.username },
      JWT_secretKey,
      { expiresIn: "1d" }
    );
    return token;
  } catch (error) {
    console.error("Error generating token:", error.message);
    throw new Error("Token generation failed");
  }
}

module.exports = { login };
