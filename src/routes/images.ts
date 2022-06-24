import express from 'express';
import imageResize from '../utils/imageResize';

const routes = express.Router();

routes.get('/images', async (req, res) => {
  //console.log(`filename: ${req.query.filename}`);
  //console.log(`weight: ${req.query.weight}`);
  //console.log(`height: ${req.query.height}`);
  const result = await imageResize(
    String(req.query.filename),
    Number(req.query.weight),
    Number(req.query.height)
  );
  if (result) {
    res.sendFile(`src/assets/thumb/${req.query.filename}.jpg`, { root: '.' });
  } else {
    res.send("Image resize wasn't finished.");
  }
});

export default routes;