import mongoose from "mongoose";

const { Schema } = mongoose;

const postSchema = new Schema({
  title: { type: String, required: true },
  platform:{ type: String, required: true },
  gameGenre:{ type: String, required: true },
  releaseYear:{ type: String, required: true },
  description:{ type: String, required: true },
  image: String,
  
});

export default mongoose.model("Post", postSchema);