const router = require('express').Router();
const {
    getAllThoughts,
    addThought,
    getThoughtById,
    updateThought,
    removeThought,
    addReaction,
    removeReaction
} = require('../../controllers/thought-controller');
const { route } = require('./user-routes');

// /api/thoughts
router.route('/').get(getAllThoughts);

router.route('/:userId').post(addThought);

router
.route('/:thoughtId')
.get(getThoughtById)
.put(updateThought)

router
    .route('/:userId/:thoughtId')
    .delete(removeThought);

router
.route('/thoughts/:thoughtId/reactions')
.post(addReaction)
.delete(removeReaction);

module.exports = router; 
