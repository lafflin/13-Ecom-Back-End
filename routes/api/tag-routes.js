const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
	// be sure to include its associated Product data
	try {
		const allTags = await Tag.findAll();
		res.status(200).json(allTags);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.get("/:id", async (req, res) => {
	// be sure to include its associated Product data
	try {
		const tagById = await Tag.findByPk(req.params.id);
		res.status(200).json(tagById);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.post("/", async (req, res) => {
	// create a new tag
	try {
		console.log(req.body);
		const addTag = await Tag.create({
			tag_name: req.body.tag_name,
		});
		console.log(addTag);
		res.status(200).json(addTag);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.put("/:id", (req, res) => {
	// update a tag's name by its `id` value
});

router.delete("/:id", async (req, res) => {
	try {
		const deleteTagById = await Tag.destroy({
			where: {
				id: req.params.id,
			},
		});
		res.status(200).json(deleteTagById);
	} catch (error) {
		res.status(500).json(error);
	}
});

module.exports = router;
