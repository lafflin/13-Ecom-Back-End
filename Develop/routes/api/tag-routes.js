const router = require("express").Router();
const { Tag, Product, ProductTag } = require("../../models");

// The `/api/tags` endpoint

router.get("/", async (req, res) => {
	// find all tags
	// be sure to include its associated Product data
	try {
		const allTags = await Tag.findAll();
		res.status(200).json(allTags);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.get("/:id", async (req, res) => {
	// find a single tag by its `id`
	// be sure to include its associated Product data
	try {
		const tagById = await Tag.findByPk(req.params.id);
		res.status(200).json(tagById);
	} catch (error) {
		res.status(500).json(error);
	}
});

router.post("/", (req, res) => {
	// create a new tag
});

router.put("/:id", (req, res) => {
	// update a tag's name by its `id` value
});

router.delete("/:id", (req, res) => {
	// delete on tag by its `id` value
});

module.exports = router;
