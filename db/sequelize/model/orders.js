module.exports = (Sequelize, Model, sequelize) => {
    class Order extends Model {}
    Order.init({
        id: {
            type: Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey: true
        },
        createdDate: {
            type: Sequelize.DATE
        },
        requiredDate: {
            type: Sequelize.DATE
        },
        shippedDate: {
           type: Sequelize.DATE
        },
        status: {
            type: Sequelize.STRING(15)
        },
        comments: {
            type: Sequelize.TEXT
        },
        customerId: {
            type: Sequelize.INTEGER
        }
        
    },{
        sequelize,
        modelName: 'orders',
        timestamps: false
    })
    return Order
}