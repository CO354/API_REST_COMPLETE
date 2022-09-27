module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('fotos', {
      id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      originalname: {
        type: Sequelize.STRING,
        allowNull: false,
      },

      filename: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      aluno_id: { // => Referece o id da tabela do aluno
        type: Sequelize.INTEGER,
        allowNull: true,
        references: {
          model: 'alunos', // => Referencia o model da tabela de alunos "no caso"
          key: 'id', // O tipo de relacionamento
        },
        onDelete: 'SET NULL', // SE Apagar um aluno todas as fotos ficaram vazias, dessa forma nao, usamos "SET NULL" nao o CASCADE
        onUpdate: 'CASCADE', // Ele vai atualizar todo relacionado com o aluno quando o id for actualizado

      },
      create_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
      updated_at: {
        type: Sequelize.DATE,
        allowNull: false,
      },
    });
  },

  async down(queryInterface) {
    await queryInterface.dropTable('fotos');
  },
};
