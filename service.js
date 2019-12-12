module.exports = async(Model, condition, JModel) => {
    return await Model.findAll({
        where: condition,
        raw: true,
        include: [{
            model: JModel
        }]
    })
}