module.exports = (Sequelize, Model, sequelize) => {
    class Product extends Model {}
    Product.init({
        id: {
            type: Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey: true
        },
        code: {
            type: Sequelize.STRING(15),
        },
        name: {
            type: Sequelize.STRING(70)
        },
        scale: {
            type: Sequelize.STRING(10)
        },
        vendor: {
            type: Sequelize.STRING(50)
        },
        description: {
            type: Sequelize.TEXT
        },
        quantityInStock: {
            type: Sequelize.BOOLEAN
        },
        buyPrice: {
           type: Sequelize.DECIMAL(10, 2)
        },
        MSRP: {
            type: Sequelize.DECIMAL(10, 2)
        },
        productlineId: {
            type: Sequelize.INTEGER,
        }
    },{
        sequelize,
        modelName: 'products',
        timestamps: false
    })


    return Product
}