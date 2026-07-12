const User = require("../model/user");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// Create Account
const createacc = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Check Email Already Exists
    const existingUser = await User.findOne({ email });

    if (existingUser) {
      return res.status(400).json({
        success: false,
        message: "Email already exists",
      });
    }

    // Hash Password
    const hashpassword = await bcrypt.hash(password, 10);

    // Create User
    const response = await User.create({
      name,
      email,
      password: hashpassword,
    });

    res.status(201).json({
      success: true,
      message: `Account created successfully ${response.name}`,
      userdata: {
        id: response._id,
        name: response.name,
        email: response.email,
      },
    });

  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

// Login Account
const loginacc = async (req, res) => {
  try {

    const { email, password } = req.body;

    // Check User
    const usercheck = await User.findOne({ email });

    if (!usercheck) {
      return res.status(401).json({
        success: false,
        message: "Email not found",
      });
    }

    // Compare Password
    const passwordcheck = await bcrypt.compare(
      password,
      usercheck.password
    );

    if (!passwordcheck) {
      return res.status(401).json({
        success: false,
        message: "Password is invalid",
      });
    }

    // Generate JWT Token
    const token = jwt.sign(
      {
        id: usercheck._id,
        email: usercheck.email,
      },
      process.env.JWT_SECRET,
      {
        expiresIn: "1h",
      }
    );

    res.status(200).json({
      success: true,
      message: "Successfully Logged In",
      token: token,
      user: {
        id: usercheck._id,
        name: usercheck.name,
        email: usercheck.email,
      },
    });

  } catch (e) {
    res.status(500).json({
      success: false,
      message: e.message,
    });
  }
};

module.exports = {
  createacc,
  loginacc,
};