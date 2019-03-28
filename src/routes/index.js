import express from 'express';
var router = express.Router();

/* GET home page. */
router.get('/', (req, res, next) => {
  res.render('index', { title: 'Express' });
});
router.get('/dsd', (req, res, next) => {
  const data = 'pushkarTest';
  res.json({
    'hello': data
  })
});
export default router;
