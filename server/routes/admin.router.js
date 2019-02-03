const express = require('express');
const pool = require('../modules/pool');

const router = express.Router();

//get projects from database
router.get('/', (req, res) => {
    const queryText = `SELECT * FROM "projects";`;
    pool.query(queryText).then((result) => {
        res.send(result.rows);
    }).catch((error) => {
        console.log('Error in GET routes');
        res.sendStatus(500);
    });
});




// add new project to the database
router.post('/', (req, res) => {
    const newInput = req.body;
    
    const queryText = `INSERT INTO projects
                        ("name", "description","thumbnail", "website", 
                        "github", "date_completed", "tag_id") 
                        VALUES ($1, $2, $3, $4, $5, $6, $7)`;
    const queryValues = [
        newInput.name, newInput.description, newInput.thumbnail,
        newInput.website, newInput.github, 
        newInput.date_completed, newInput.tag_id
    ];
    pool.query(queryText, queryValues).then(() => {
        res.sendStatus(201);}).catch((err) => {
            console.log('Error in completing INSERT query', err);
            res.sendStatus(500);
        });
});

router.delete('/', (req,res) => {
    const queryText = `DELETE FROM "projects" WHERE id=$1;`;
    pool.query(queryText, [req.query.id]).then(() => {
        res.sendStatus(200);
    }).catch((err) => {
        console.log('Error DELETE query: ', err); 
    });
});

module.exports = router;