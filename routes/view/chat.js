import express from 'express';

const chatRoutes = express.Router();

chatRoutes.get('/', (req, res) => {
    res.render('chat.twig');
});

export default chatRoutes;
