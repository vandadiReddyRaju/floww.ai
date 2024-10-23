const db = require('../db/database');

class Transaction {
    static create(transaction, callback) {
        const { type, category, amount, date, description } = transaction;
        const sql = 'INSERT INTO transactions (type, category, amount, date, description) VALUES (?, ?, ?, ?, ?)';
        db.run(sql, [type, category, amount, date, description], function (err) {
            callback(err, this.lastID);
        });
    }

    static getAll(callback) {
        const sql = 'SELECT * FROM transactions';
        db.all(sql, [], callback);
    }

    static getById(id, callback) {
        const sql = 'SELECT * FROM transactions WHERE id = ?';
        db.get(sql, [id], callback);
    }

    static update(id, transaction, callback) {
        const { type, category, amount, date, description } = transaction;
        const sql = 'UPDATE transactions SET type = ?, category = ?, amount = ?, date = ?, description = ? WHERE id = ?';
        db.run(sql, [type, category, amount, date, description, id], callback);
    }

    static delete(id, callback) {
        const sql = 'DELETE FROM transactions WHERE id = ?';
        db.run(sql, [id], callback);
    }

    static getSummary(callback) {
        const sql = `
            SELECT 
                SUM(CASE WHEN type = 'income' THEN amount ELSE 0 END) AS total_income,
                SUM(CASE WHEN type = 'expense' THEN amount ELSE 0 END) AS total_expenses
            FROM transactions`;
        db.get(sql, [], callback);
    }
}

module.exports = Transaction;
