import express from "express";
const router = express.Router();
import {
  addSubCategory,
  updateSubCategory,
  deleteSubCategory,
  getAllSubCategories,
  getSubCategoryById,
} from "../controllers/subCategoryController.js";

router.route("/").post(addSubCategory).get(getAllSubCategories);
router
  .route("/:id")
  .get(getSubCategoryById)
  .delete(deleteSubCategory)
  .put(updateSubCategory);

export default router;
