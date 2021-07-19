const Sequelize = require("sequelize");
const sequelize = new Sequelize("d837r1vbf4r54s", "qxvfcvvogtvwmf", "520ce0d451b80d7329ac01335957789d11b636693363bca61db7bd80ec8ab012", {
    dialect: "postgres",
    host: "ec2-54-220-53-223.eu-west-1.compute.amazonaws.com",
    define: {
        timestamps: false
    },
    ssl: true
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
