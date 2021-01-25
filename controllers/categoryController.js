import asyncHandler from "express-async-handler";
import Category from "../models/categoryModel.js";

// @route   POST /api/category/
// @access  Public
// @desc    Add a new category
const addCategory = asyncHandler(async (req, res) => {
  const { name, description, rootCategoryId } = req.body;

  const categoryExists = await Category.findOne({ name });

  if (categoryExists) {
    res.status(400);
    throw new Error("Category already exists");
  }

  const category = await Category.create({
    name,
    description,
    rootCategoryId,
  });

  if (category) {
    res.status(201).json({
      _id: category._id,
      name: category.name,
      description: category.description,
      rootCategoryId: category.rootCategoryId,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Category data");
  }
});

// @desc    Get a   Category by Id
// @route   GET /api/category/:id
// @access  public
const getCategoryById = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (category) {
    res.json({
      _id: category._id,
      name: category.name,
      description: category.description,
      rootCategoryId: category.rootCategoryId,
    });
  } else {
    res.status(404);
    throw new Error("  category not found");
  }
});

// @desc    Update category
// @route   PUT /api/category
// @access  Public
const updateCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (category) {
    category.name = req.body.name || category.name;
    category.description = req.body.description || category.description;
    category.rootCategoryId =
      req.body.rootCategoryId || category.rootCategoryId;
    const updatedcategory = await category.save();

    res.json({
      _id: updatedcategory._id,
      name: updatedcategory.name,
      description: updatedcategory.description,
      rootCategoryId: updatedcategory.rootCategoryId,
    });
  } else {
    res.status(404);
    throw new Error("  Category not found");
  }
});

// @desc    Get all   Categories
// @route   GET /api/ categories
// @access  Public
const getAllCategories = asyncHandler(async (req, res) => {
  const categories = await Category.find({});
  res.json(categories);
});

// @desc    Delete   Category
// @route   DELETE /api/category/:id
// @access  Public
const deleteCategory = asyncHandler(async (req, res) => {
  const category = await Category.findById(req.params.id);

  if (category) {
    await Category.remove();
    res.json({ message: "  Category removed" });
  } else {
    res.status(404);
    throw new Error("  Category not found");
  }
});

export {
  addCategory,
  getCategoryById,
  updateCategory,
  getAllCategories,
  deleteCategory,
};
