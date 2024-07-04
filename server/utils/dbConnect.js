import mongoose from "mongoose";

export default async function connectDB() {
  try {
    await mongoose.connect(process.env.DB_URI);

    console.log("Connected to db");
  } catch (error) {
    console.log("🚀 ~ error connecting to db:", error.message);
  }
}
