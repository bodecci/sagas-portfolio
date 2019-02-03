const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();


// selects the projects to be displayed in the Porjects view page
router.get('/', (req, res) => {
    const queryText = `SELECT "name", "github", "website", "tag_id",
    "description" FROM "projects";`;
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in GET routes for NEW');
        res.sendStatus(500);
    });
});

module.exports = router;