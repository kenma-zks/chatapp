import mongoose from "mongoose";

// const messageSchema = new mongoose.Schema({
//   type: { type: String, required: true },
//   time: { type: String, required: true },
//   text: { type: String, required: true },
//   default: [],
// });

// const chatDataSchema = new mongoose.Schema({
//   id: { type: Number, required: true },
//   username: { type: String, required: true },
//   Time: { type: String, required: true, default: "" },
//   Date: { type: Date, required: true, default: "" },
//   Image: { type: String, required: true, default: "" },
//   lastOnline: { type: String, default: "" },
//   messages: [messageSchema],
// });

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter a username"],
    unique: true,
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
  },
  chatData: [
    {
      username: { type: String, required: true },
      Time: { type: String, default: "" },
      Date: { type: Date, default: Date.now },
      Image: { type: String, default: "" },
      lastOnline: { type: String, default: "" },
      messages: [
        {
          type: { type: String, required: true },
          time: { type: String, required: true },
          text: { type: String, required: true },
        },
      ],
    },
  ],
});

const User = mongoose.model("User", userSchema);

export default User;
