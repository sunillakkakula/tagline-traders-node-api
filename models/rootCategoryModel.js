import mongoose from "mongoose";

const rootCategorySchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

const RootCategory = mongoose.model("RootCategory", rootCategorySchema);

export default RootCategory;
