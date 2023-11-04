const Sequelize = require('sequelize');
const db = require('../db');


const Order = db.define("order",{ 
    detail:{
        type: Sequelize.STRING,
        allowNull: false
    },
    request: {
        type: Sequelize.STRING,
        allowNull: false
    }, 
    customer: {
        type: Sequelize.STRING, 
    },
    order_due_date:{
        type: Sequelize.DATEONLY,
    }
}); 

module.exports = Order;