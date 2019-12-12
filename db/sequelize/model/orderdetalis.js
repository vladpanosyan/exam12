module.exports = (Sequelize, Model, sequelize) => {
    class OrederDetalis extends Model {}
    OrederDetalis.init({
        orderId: {
            type: Sequelize.INTEGER,
            primaryKey: true
        },
        productId: {
            type: Sequelize.INTEGER,
            primaryKey: true,
        },
        quantityOrdered: {
            type: Sequelize.INTEGER
        },
        priceEach: {
           type: Sequelize.DECIMAL(10, 2)
        },
        orderLineNumber: {
            type: Sequelize.BOOLEAN
        },
        
    },{
        sequelize,
        modelName: 'orderdetalis',
    })
    return OrederDetalis
}