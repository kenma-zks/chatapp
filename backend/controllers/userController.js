import User from "../models/userModel.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";

const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    res.status(400).json({ message: "Please enter all fields" });
  }

  const user = await User.findOne({ email });

  if (user && (await bcrypt.compare(password, user.password))) {
    // Check if chatData exists, and create it if not
    if (!user.chatData || user.chatData.length === 0) {
      user.chatData = [
        {
          id: user._id,
          username: user.username,
          Time: "",
          Date: new Date(),
          Image: "",
          lastOnline: "",
          messages: [],
        },
      ];
      await user.save();
    }

    const accessToken = jwt.sign(
      {
        user: {
          username: user.username,
          email: user.email,
          id: user._id,
        },
      },
      process.env.ACCESS_TOKEN_SECRET,
      {
        expiresIn: "1d",
      }
    );
    res.status(200).json({
      accessToken,
    });
  } else {
    res.status(400).json({ message: "Invalid credentials" });
  }
};

const registerUser = async (req, res) => {
  const { username, email, password } = req.body;

  if (!username || !email || !password) {
    return res
      .status(400)
      .json({ message: "Please enter all fields (username, email, password)" });
  }

  try {
    const userAvailable = await User.findOne({
      $or: [{ email }, { username }],
    });

    if (userAvailable) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user with chatData
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      chatData: [
        {
          username, // Use the main username here
          Time: "",
          Date: Date.now(), // You might want to set a default value here
          Image: "",
          lastOnline: "",
          messages: [],
        },
      ],
    });

    res.status(201).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      chatData: user.chatData,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getUserProfile = async (req, res) => {
  res.json(req.user);
};

const getAllUsers = async (req, res) => {
  const users = await User.find({});
  res.json(users);
};

const getAllUsersWithChatData = async (req, res) => {
  try {
    const userId = req.user.id;

    const usersWithChatData = await User.find({}).select([
      "username",
      "chatData",
    ]);

    const filteredUsers = usersWithChatData
      .filter((user) => user.id !== userId)
      .map((user) => {
        return {
          _id: user._id,
          username: user.username,
          email: user.email,
          chatData: user.chatData,
        };
      });

    res.json(filteredUsers);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Server Error" });
  }
};

export {
  loginUser,
  registerUser,
  getUserProfile,
  getAllUsers,
  getAllUsersWithChatData,
};
