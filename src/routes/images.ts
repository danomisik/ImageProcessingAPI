import express from 'express';   
const routes = express.Router();

//api/images?filename=argentina&width=200&height=200
routes.get('/images', (req, res) => { 
    res.send('Hello, images!');
});

export default routes;