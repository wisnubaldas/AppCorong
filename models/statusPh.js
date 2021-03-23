module.exports = (sequelize, type) => {
    return sequelize.define('statusPh', {
        id: {
          type: type.INTEGER,
          primaryKey: true,
          autoIncrement: true
        },
        tabung: type.STRING,
        nilai:type.INTEGER,
    })
}