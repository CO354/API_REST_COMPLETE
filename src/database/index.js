import Sequelize from 'sequelize';
import databaseConfig from '../config/database';
import Aluno from '../models/Aluno';
import User from '../models/User';
import Foto from '../models/Foto';

const models = [Aluno, User, Foto];

const connection = new Sequelize(databaseConfig);

models.forEach((model) => model.init(connection));

// Associacao da tabela é feito aqui
// VERIFICANDO SE MODEL ASSOCIATE EXISTE == CRIAMOS NO MODEL DA FOTO
models.forEach((model) => model.associate && model.associate(connection.models));
