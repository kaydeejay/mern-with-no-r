const express = require('express');
const router = express.Router();
const MovieController = require('../models/controllers/movieDB.controller');

// root directory == /api
// create:
router.post('/add', MovieController.addMovie);
// read:
router.get('/movies', MovieController.findAll);
router.get('/movies/:id', MovieController.findById);
// update:
router.put('/markseen', MovieController.updateMovie);
// delete:
router.delete('/delete/:id', MovieController.deleteById);

module.exports = router;
