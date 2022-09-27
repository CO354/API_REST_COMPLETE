const bcryptjs = require('bcryptjs');

module.exports = {
  async up(queryInterface) {
    await queryInterface.bulkInsert(
      'users',
      [{
        nome: 'John',
        email: 'jornalamgio@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        create_at: new Date(), // A data actual/No momento da gravacao do dado
        updated_at: new Date(),
      },
      {
        nome: 'John2',
        email: 'jornalamgio2@gmail.com',
        password_hash: await bcryptjs.hash('123456', 8),
        create_at: new Date(), // A data actual/No momento da gravacao do dado
        updated_at: new Date(),
      },
      {
        nome: 'John3',
        email: 'jornalamgio3@gmail.com',
        password_hash: await bcryptjs.hash('123456789', 8),
        create_at: new Date(), // A data actual/No momento da gravacao do dado RENAME TO created_at
        updated_at: new Date(),
      },
      ],
      {},
    );
  },

  async down() {
    console.log('Jar');
  },
};
