const router = require('express').Router()
const Sub = require('../models/Subs.js')

router.get('/', (req, res) => {
  res.render('index')
})

router.post('/', async (req, res) => {
  try {
    const subscriber = await Sub.create({
      sub_name: req.body.sub_name,
      email: req.body.email
    })
    
    res.status(200).json(subscriber)
  } catch(err){
    res.status(400).json(err)
  }
});


module.exports = router;