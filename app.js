import dotenv from 'dotenv';

dotenv.config();
import { resolve } from 'path';
import './src/database';
import express from 'express';
import homeRoutes from './src/routers/homeRoutes';
import userRoutes from './src/routers/userRoutes';
import tokenRoutes from './src/routers/tokenRoutes';
import alunoRoutes from './src/routers/alunoRoutes';
import fotoRoutes from './src/routers/fotoRoutes';

class App {
  constructor() {
    this.app = express();
    this.middlewares();
    this.routes();
  }

  middlewares() {
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(express.json());
    this.app.use(express.static(resolve(__dirname, 'uploads')));
  }

  routes() {
    this.app.use('/', homeRoutes);
    this.app.use('/users/', userRoutes);
    this.app.use('/tokens/', tokenRoutes);
    this.app.use('/alunos/', alunoRoutes);
    this.app.use('/fotos/', fotoRoutes);
  }
}

export default new App().app;
