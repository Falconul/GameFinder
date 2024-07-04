import mongoose from "mongoose";

// const schema = mongoose.Schema;
const { Schema } = mongoose;

const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  age: Number,
  married: Boolean,
  coursesEnrolled: [],
  image: String,
  developer: String,
});


const User = mongoose.model("User", userSchema);

export default User;
