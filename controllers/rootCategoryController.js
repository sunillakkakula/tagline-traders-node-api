import asyncHandler from "express-async-handler";
import RootCategory from "../models/rootCategoryModel.js";

// @route   POST /api/rootcategory/
// @access  Public
// @desc    Add a new root category
const addRootCategory = asyncHandler(async (req, res) => {
  const { name, description } = req.body;

  const rootCategoryExists = await RootCategory.findOne({ name });

  if (rootCategoryExists) {
    res.status(400);
    throw new Error("Root Category already exists");
  }

  const rootcategory = await RootCategory.create({
    name,
    description,
  });

  if (rootcategory) {
    res.status(201).json({
      _id: rootcategory._id,
      name: rootcategory.name,
      description: rootcategory.description,
    });
  } else {
    res.status(400);
    throw new Error("Invalid Root Category data");
  }
});

// @desc    Get a Root Category by Id
// @route   GET /api/rootcategory/:id
// @access  public
const getRootCategoryById = asyncHandler(async (req, res) => {
  const rootcategory = await RootCategory.findById(req.params.id);

  if (rootcategory) {
    res.json({
      _id: rootcategory._id,
      name: rootcategory.name,
      description: rootcategory.description,
    });
  } else {
    res.status(404);
    throw new Error("Root category not found");
  }
});

// @desc    Update rootcategory
// @route   PUT /api/rootcategory
// @access  Public
const updateRootCategory = asyncHandler(async (req, res) => {
  const rootcategory = await RootCategory.findById(req.params.id);

  if (rootcategory) {
    rootcategory.name = req.body.name || rootcategory.name;
    rootcategory.description = req.body.description || rootcategory.description;

    const updatedRootcategory = await rootcategory.save();

    res.json({
      _id: updatedRootcategory._id,
      name: updatedRootcategory.name,
      description: updatedRootcategory.description,
    });
  } else {
    res.status(404);
    throw new Error("Root Category not found");
  }
});

// @desc    Get all Root Categories
// @route   GET /api/rootcategories
// @access  Public
const getAllRootCategories = asyncHandler(async (req, res) => {
  const rootcategories = await RootCategory.find({});
  res.json(rootcategories);
});

// @desc    Delete Root Category
// @route   DELETE /api/rootcategory/:id
// @access  Public
const deleteRootCategory = asyncHandler(async (req, res) => {
  const rootcategory = await RootCategory.findById(req.params.id);

  if (rootcategory) {
    await rootcategory.remove();
    res.json({ message: "Root Category removed" });
  } else {
    res.status(404);
    throw new Error("Root Category not found");
  }
});

export {
  addRootCategory,
  getRootCategoryById,
  updateRootCategory,
  getAllRootCategories,
  deleteRootCategory,
};
