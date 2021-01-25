import express from "express";
const router = express.Router();
import {
  addRootCategory,
  deleteRootCategory,
  updateRootCategory,
  getRootCategoryById,
  getAllRootCategories,
} from "../controllers/rootCategoryController.js";

router.route("/").post(addRootCategory).get(getAllRootCategories);
router
  .route("/:id")
  .get(getRootCategoryById)
  .delete(deleteRootCategory)
  .put(updateRootCategory);

export default router;
