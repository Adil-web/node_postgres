const Sequelize = require("sequelize");
const sequelize = new Sequelize('postgres://qxvfcvvogtvwmf:520ce0d451b80d7329ac01335957789d11b636693363bca61db7bd80ec8ab012@ec2-54-220-53-223.eu-west-1.compute.amazonaws.com:5432/d837r1vbf4r54s
', {
    dialect: "postgres",
    protocol: 'postgres',
    dialectOptions: {
      ssl: {
        require: true,
        rejectUnauthorized: false
      }
    }
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
