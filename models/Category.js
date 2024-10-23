const db = require('../db/database');

class Category {
    static create(name, type, callback) {
        const sql = 'INSERT INTO categories (name, type) VALUES (?, ?)';
        db.run(sql, [name, type], function (err) {
            callback(err, this.lastID);
        });
    }

    static getAll(callback) {
        const sql = 'SELECT * FROM categories';
        db.all(sql, [], callback);
    }
}

module.exports = Category;
