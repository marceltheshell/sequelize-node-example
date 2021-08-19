const { DataTypes } = require('sequelize');

// We export a function that defines the model.
// This function will automatically receive as parameter the Sequelize connection object.
module.exports = (sequelize) => {
	sequelize.define('student', {
		// The following specification of the 'id' attribute could be omitted
		// since it is the default.
		id: {
			allowNull: false,
			autoIncrement: true,
			primaryKey: true,
			type: DataTypes.INTEGER
		},
		name: {
			allowNull: false,
			type: DataTypes.STRING,
		},
		school_id: {
			allowNull: false,
			type: DataTypes.STRING,
		},
		gender: {
			allowNull: false,
			type: DataTypes.STRING,
			validate: {
				isIn: [['male', 'female', 'non-binary']]
			}
		},
		ethnicity: {
			allowNull: false,
			type: DataTypes.STRING,
		}
		// We also want it to have a 'orchestraId' field, but we don't have to define it here.
		// It will be defined automatically when Sequelize applies the associations.
	});
};
