const Transaction = require('../models/Transaction');

exports.createTransaction = (req, res) => {
    const transaction = req.body;
    Transaction.create(transaction, (err, id) => {
        if (err) return res.status(500).json({ error: 'Failed to create transaction' });
        res.status(201).json({ id });
    });
};

exports.getTransactions = (req, res) => {
    Transaction.getAll((err, transactions) => {
        if (err) return res.status(500).json({ error: 'Failed to retrieve transactions' });
        res.json(transactions);
    });
};

exports.getTransactionById = (req, res) => {
    const id = req.params.id;
    Transaction.getById(id, (err, transaction) => {
        if (err) return res.status(500).json({ error: 'Failed to retrieve transaction' });
        if (!transaction) return res.status(404).json({ error: 'Transaction not found' });
        res.json(transaction);
    });
};

exports.updateTransaction = (req, res) => {
    const id = req.params.id;
    const transaction = req.body;
    Transaction.update(id, transaction, (err) => {
        if (err) return res.status(500).json({ error: 'Failed to update transaction' });
        res.json({ message: 'Transaction updated successfully' });
    });
};

exports.deleteTransaction = (req, res) => {
    const id = req.params.id;
    Transaction.delete(id, (err) => {
        if (err) return res.status(500).json({ error: 'Failed to delete transaction' });
        res.json({ message: 'Transaction deleted successfully' });
    });
};

exports.getSummary = (req, res) => {
    Transaction.getSummary((err, summary) => {
        if (err) return res.status(500).json({ error: 'Failed to retrieve summary' });
        res.json(summary);
    });
};
