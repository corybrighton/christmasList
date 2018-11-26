const router = require('express').Router()
let List = require('../models/list')

//Connected
router.get('/', (req, res, next) => {
  console.log('List')
  next()
})

//CRUD
router.post('/', (req, res, next) => {
  List.create(req.body)
    .then(list => res.send(list))
    .catch(err => {
      res.status(404).send(err)
    })
})

router.get('/', (req, res, next) => {
  List.find({})
    .then(list => res.send(list))
    .catch(err => {
      res.status(404).send(err)
    })
})

router.get('/:id', (req, res, next) => {
  List.findById(req.params.id)
    .then(list => res.send(list))
    .catch(err => {
      res.status(404).send(err)
    })
})

router.put('/:id', (req, res, next) => {
  List.findByIdAndUpdate(req.params.id, req.body, { new: true })
    .then(list => res.send(list))
    .catch(err => {
      res.status(404).send(err)
    })
})

router.delete('/:id', (req, res, next) => {
  List.findByIdAndDelete(req.params.id)
    .then(del => res.send("Beleted"))
    .catch(err => {
      res.status(404).send(err)
    })
})

module.exports = router