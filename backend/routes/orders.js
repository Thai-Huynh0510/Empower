const express = require('express');
const router = express.Router();
const { Task, Order } = require('../database/models');

// helper function so we don't need to wrap our
// handler functions in try-catch blocks;
// the async handler will catch any errors and pass
// them to the error-handling middleware (defined in app.js)
const ash = require('express-async-handler');

/** GET ALL TASKS: express-async-handler (ash) */
// automatically catches any error and sends to middleware
// same as using try/catch and calling next(error)
router.get('/', ash(async (req, res) => {
  let orders = await Order.findAll();
  res.status(200).json(orders);
}));

//** get order by id **//
router.get('/:id', ash(async (req, res) => {
  let order = await Order.findByPk(req.params.id, { include: [Task] });
  res.status(200).json(order);
}));

//** add new order **/
router.post('/', function(req,res,next){
  Order.create(req.body)
  .then(createdOrder => res.status(200).json(createdOrder)).catch(err=>next(err));
});

//** update order by id **//
router.put('/:id', ash(async (req, res) => {
  await Order.update(req.body, {
      where: { id: req.params.id }
  });
  let orders = await Order.findByPk(req.params.id, { include: [Task] });
  res.status(201).json(orders);
}));

//** delete order **//
router.delete('/:id',function(req,res,next) {
  Order.destroy({
    where: {
      id: req.params.id
    }
  })
  .then(() => res.status(200).json("deleted an Order"))
  .catch(err => next(err));
});

module.exports = router;