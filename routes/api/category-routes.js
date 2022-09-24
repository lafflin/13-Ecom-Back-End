const router = require("express").Router();
const { Category, Product } = require("../../models");

// The `/api/categories` endpoint

router.get("/", async (req, res) => {
	try {
		const allCategories = await Category.findAll();
		res.status(200).json(allCategories);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.get("/:id", async (req, res) => {
	try {
		const categoryById = await Category.findByPk(req.params.id).then(
			function () {
				displayProducts = Product.findAll({
					where: {
						category_id: req.params.id,
					},
				}).then((displayProducts) => {
					res.status(200).json(displayProducts);
				});
			}
		);
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

router.put("/:id", async (req, res) => {
	// update a category by its `id` value
	try {
		const updateCategory = await Category.findByPk(req.params.id).then(
			function (UpdatedCategory) {
				UpdatedCategory.update({
					category_name: req.body.category_name,
				}).then((UpdatedCategory) => {
					res.status(200).json(UpdatedCategory);
				});
			}
		);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.delete("/:id", async (req, res) => {
	// delete a category by its `id` value
	try {
		const deleteCategoryById = await Category.destroy({
			where: {
				id: req.params.id,
			},
		});
		res.status(200).json(deleteCategoryById);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
