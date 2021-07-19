const Sequelize = require("sequelize");
const sequelize = new Sequelize("node_postgres", "postgres", "1", {
    dialect: "postgres",
    host: "localhost",
    define: {
        timestamps: false
    }
});


const a_client = sequelize.define("a_client", {
    id: {
      type: Sequelize.INTEGER,
      autoIncrement: true,
      primaryKey: true,
      allowNull: false
    },
    bin_iin: {
      type: Sequelize.STRING,
      allowNull: false
    },
    signing_date: {
      type: Sequelize.DATE,
      allowNull: false
    },
    signing_confirmation: {
      type: Sequelize.TEXT,
      allowNull: false
    },
});

sequelize.sync().then(()=>{return}).catch(err=> console.log(err));

module.exports = sequelize
