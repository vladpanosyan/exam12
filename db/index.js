const { Sequelize, Model, Op } = require('sequelize')
let sequelize = new Sequelize('nodejscoursedb_3', 'nodejsuser', 'fTsvvQHyCIBo0r2R', {
    host: 'node.voznisoft.com',
    dialect: 'mysql',

    pool: {
        max: 10,
        min: 0,
        idle: 10000
    }
});

const Product = require('./sequelize/model/product')(Sequelize, Model, sequelize)
const Order = require('./sequelize/model/orders')(Sequelize, Model, sequelize)
const OrderDetalis = require('./sequelize/model/orderdetalis')(Sequelize, Model, sequelize)
const Customer = require('./sequelize/model/customers')(Sequelize, Model, sequelize)

//  relation/association 

// Product.hasMany(OrderDetalis)
// Order.hasMany(OrderDetalis)
// Customer.hasMany(Order)


Product.belongsToMany(Order, {through: OrderDetalis, foreignKey: 'productId', otherKey: 'orderId'})
Order.belongsToMany(Product, {through: OrderDetalis, foreignKey: 'OrderId', otherKey: 'productId'})

module.exports = sequelize
    .authenticate()
    .then(async () => {
        console.log('Connection has been established successfully.');
        // const finder = await require('./../service')(Product, Order, OrderDetalis)
        // console.log(finder)
        return {
            Product,
            Op
        }

    })
    .then(() => {
        return sequelize.sync()
    })
    .then(res => {
        // console.log(res)
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err.message);

    })

