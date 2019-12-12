module.exports = (Sequelize, Model, sequelize) => {
    class Customer extends Model {}
    Customer.init({
        id: {
            type: Sequelize.INTEGER,
            autoIncrement:true,
            primaryKey: true
        },
        name: {
            type: Sequelize.STRING(50)
        },
        contactLastName: {
            type: Sequelize.STRING(50)
        },
        contactFirstName: {
            type: Sequelize.STRING(50)
        },
        phone: {
            type: Sequelize.STRING(50)
        },
        adressLine1: {
            type: Sequelize.STRING(50)
        },
        adressLine2: {
           type: Sequelize.STRING(50)
        },
        city: {
            type: Sequelize.STRING(50)
        },
        state: {
            type: Sequelize.STRING(50)
        },
        postalCode: {
            type: Sequelize.STRING(15) 
        },
        country: {
            type: Sequelize.STRING(50)  
        },
        creditLimit: {
            type: Sequelize.DECIMAL(10, 2)
        }
    },{
        sequelize,
        modelName: 'customers',
    })
    return Customer
}