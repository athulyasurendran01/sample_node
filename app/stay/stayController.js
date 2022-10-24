const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');

router.use(bodyParser.urlencoded({ extended: true }));
router.use(bodyParser.json());
const db = require(__root + 'db');

router.get('/', function (req, res) {
    const sql = `SELECT * FROM property_types`;
    db.query(sql, function (err, result) {
        if (err) return res.status(500).send({ message: err.message });
        res.status(200).send(result);
    });
});

module.exports = router;