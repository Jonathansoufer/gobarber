module.exports = {
  up: queryInterface => {
    return queryInterface.addConstraint('appointments', ['provider_id'], {
      type: 'foreign key',
      name: 'appointments_provider_id_fkey',
      references: { table: 'users', field: 'id' },
      onUpdate: 'CASCADE',
      onDelete: 'SET NULL',
      allowNul: true,
    });
  },

  down: queryInterface => {
    return queryInterface.removeConstraint(
      'appointments',
      'appointments_provider_id_fkey'
    );
  },
};
