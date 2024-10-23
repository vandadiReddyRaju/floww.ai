// controllers/categoryController.js
const Category = require('../models/Category');

exports.createCategory = (req, res) => {
    const { name, type } = req.body;
    Category.create(name, type, (err, id) => {
        if (err) return res.status(500).json({ error: 'Failed to create category' });
        res.status(201).json({ id });
    });
};

exports.getCategories = (req, res) => {
    Category.getAll((err, categories) => {
        if (err) return res.status(500).json({ error: 'Failed to retrieve categories' });
        res.json(categories);
    });
};
