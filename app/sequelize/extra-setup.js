function applyExtraSetup(sequelize) {
	const { school, student } = sequelize.models;

	school.hasMany(student);
	student.belongsTo(school);
}

module.exports = { applyExtraSetup };
