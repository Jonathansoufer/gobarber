module.exports = {
  up: queryInterface => {
    return queryInterface.removeConstraint(
      'appointments',
      'appointments_provider_id_fkey'
    );
  },
};
