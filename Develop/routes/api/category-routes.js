const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
	// find all categories
	// be sure to include its associated Products
	try {
		const allCategories = await Category.findAll();
		res.status(200).json(allCategories);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.get("/:id", async (req, res) => {
	// find one category by its `id` value
	// be sure to include its associated Products
	try {
		const categoryById = await Category.findByPk(req.params.id);
		res.status(200).json(categoryById);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.post("/", async (req, res) => {
	// create a new category
	try {
		const addCategory = await Category.create({
			category_name: req.body.category_name,
		});
		res.status(200).json(addCategory);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.put("/:id", (req, res) => {
	// update a category by its `id` value
	try {
	} catch (error) {
		res.status(500).json(error);
	}
});

router.delete("/:id", (req, res) => {
	// delete a category by its `id` value
	try {
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
