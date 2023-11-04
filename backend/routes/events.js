const express = require('express');
const router = express.Router();
const { Event } = require('../database/models');
const ash = require('express-async-handler');

// GET all events
router.get('/', ash(async (req, res) => {
  const events = await Event.findAll({});
  res.status(200).json(events);
}));

//** get event by id **//
router.get('/:id', ash(async (req, res) => {
  let event = await Event.findByPk(req.params.id);
  res.status(200).json(event);
}));

//** add new event **/
router.post('/', function(req,res,next){
  Event.create(req.body)
  .then(createdEvent => res.status(200).json(createdEvent)).catch(err=>next(err));
});

//** update event by id **//
router.put('/:id', ash(async (req, res) => {
  await Event.update(req.body, {
      where: { id: req.params.id }
  });
  let events = await Event.findByPk(req.params.id);
  res.status(201).json(events);
}));

//** delete event **//
router.delete('/:id',function(req,res,next) {
  Event.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => res.status(200).json("deleted an event"))
  .catch(err => next(err));
});

module.exports = router;