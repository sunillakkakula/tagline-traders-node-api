import asyncHandler from "express-async-handler";
import SubCategory from "../models/subCategoryModel.js";

// @route   POST /api/subcategory/
// @access  Public
// @desc    Add a new subcategory
const addSubCategory = asyncHandler(async (req, res) => {
  const { name, description, categoryId } = req.body;

  const subCategoryExists = await SubCategory.findOne({ name });

  if (subCategoryExists) {
    res.status(400);
    throw new Error("subCategory already exists");
  }

  const subCategory = await SubCategory.create({
    name,
    description,
    categoryId,
  });

  if (subCategory) {
    res.status(201).json({
      _id: subCategory._id,
      name: subCategory.name,
      description: subCategory.description,
      categoryId: subCategory.categoryId,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Sub Category data");
  }
});

// @desc    Get a   subcategory by Id
// @route   GET /api/subcategory/:id
// @access  public
const getSubCategoryById = asyncHandler(async (req, res) => {
  const subCategory = await SubCategory.findById(req.params.id);

  if (subCategory) {
    res.json({
      _id: subCategory._id,
      name: subCategory.name,
      description: subCategory.description,
      categoryId: subCategory.categoryId,
    });
  } else {
    res.status(404);
    throw new Error("  subcategory not found");
  }
});

// @desc    Update subcategory
// @route   PUT /api/subcategory
// @access  Public
const updateSubCategory = asyncHandler(async (req, res) => {
  const subCategory = await SubCategory.findById(req.params.id);

  if (subCategory) {
    subCategory.name = req.body.name || subCategory.name;
    subCategory.description = req.body.description || subCategory.description;
    subCategory.categoryId = req.body.categoryId || subCategory.categoryId;
    const updatedCategory = await subCategory.save();

    res.json({
      _id: updatedCategory._id,
      name: updatedCategory.name,
      description: updatedCategory.description,
      categoryId: updatedCategory.categoryId,
    });
  } else {
    res.status(404);
    throw new Error("category not found");
  }
});

// @desc    Get all   Categories
// @route   GET /api/ categories
// @access  Public
const getAllSubCategories = asyncHandler(async (req, res) => {
  const categories = await SubCategory.find({});
  res.json(categories);
});

// @desc    Delete   subcategory
// @route   DELETE /api/subcategory/:id
// @access  Public
const deleteSubCategory = asyncHandler(async (req, res) => {
  const subCategory = await SubCategory.findById(req.params.id);

  if (subCategory) {
    await subCategory.remove();
    res.json({ message: "  subCategory removed" });
  } else {
    res.status(404);
    throw new Error("  subCategory not found");
  }
});

export {
  addSubCategory,
  getSubCategoryById,
  updateSubCategory,
  getAllSubCategories,
  deleteSubCategory,
};
