module.exports = {
  up: async (queryInterface) => {
    await queryInterface.bulkInsert(
      "users",
      [
        {
          username: "admin",
          password:
            "$2a$10$CunbUwjinK08nJ/81FXgEukZVeycqstRJ437MyBOCE6quXSMHFI1a",
          created_at: new Date(),
          updated_at: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface) => {
    await queryInterface.bulkDelete("users", null, {});
  },
};
