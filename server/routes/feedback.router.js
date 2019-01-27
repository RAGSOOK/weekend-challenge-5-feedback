const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

router.post('/', (req, res) => {
    console.log('In Feedback POST with', req.body);
    const feedback = req.body;
    queryText = `INSERT INTO "feedback" ("feeling", "understanding", "support", "comments")
    VALUES ($1, $2, $3, $4);`;
    pool.query(queryText, [feedback.feeling, feedback.understanding, 
                           feedback.supported, feedback.comments])
        .then((response) => {
            res.sendStatus(201);
        }).catch((error) => {
            console.log(`Error in POST /feedback ${error}`);
            res.sendStatus(500);
        });
});