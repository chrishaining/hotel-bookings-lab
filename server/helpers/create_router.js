const express = require("express");
const ObjectId = require('mongodb').ObjectId;
const createRouter = function(collection) {

  const router = express.Router();

  //index
  router.get('/', (req, res) => {
    collection 
    .find()
    .toArray()
    .then(result => res.json(result)) 
    .catch((err) => {
      console.error(err); 
      res.status(500);
      res.json({status: 500, error: err})
      });
    }); 


  //show
  router.get('/:id', (req, res) => {
    const id = req.params.id;
    collection
      .findOne({ _id: ObjectId(id) })
      .then(result => res.json(result))
      .catch(err => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  })

  //create
  router.post('/', (req, res) => {
    const newBooking = req.body;
    collection
      .insertOne(newBooking)
      .then(result => {
        res.json(result.ops[0]);
      })
      .catch(err => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  })

  //delete
  router.delete('/:id', (req, res) => {
    const id = req.params.id;
    collection
      .deleteOne({ _id: ObjectId(id) })
      .then(result => {
        res.json(result);
      })
      .catch(err => {
        console.error(err);
        res.status(500);
        res.json({ status: 500, error: err });
      });
  })


  return router;
};

module.exports = createRouter;