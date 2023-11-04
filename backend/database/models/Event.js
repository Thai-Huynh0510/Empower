const Sequelize = require('sequelize');
const db = require('../db'); 

const Event = db.define("event", {
    title: {
        type: Sequelize.STRING,
        allowNull: false
    },
    start_date:{
        type: Sequelize.DATE,
    },
    end_date:{
        type: Sequelize.DATE
    }
});

module.exports = Event;