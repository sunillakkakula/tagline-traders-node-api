import express from "express";
const router = express.Router();
import {
  addCategory,
  deleteCategory,
  updateCategory,
  getCategoryById,
  getAllCategories,
} from "../controllers/categoryController.js";

router.route("/").post(addCategory).get(getAllCategories);
router
  .route("/:id")
  .get(getCategoryById)
  .delete(deleteCategory)
  .put(updateCategory);

export default router;
