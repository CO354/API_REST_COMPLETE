import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

// NAO DEVERIA existir colocamos so para completar o CRUD, Na aplicacao real nao existiria

router.get('/', loginRequired, userController.index); // LISTA de usuarios
// router.get('/:id', userController.show); // LISTA USUARIO

// ESSE PRECISARIAMOS PRECISAMOS FAZER COM O USUARIO EDITE APENAS OS SEU DADOS
// PUT E DELETE, NAO PASSAMOS DINAMICAMENTE O ID
// NO STORE DEIXAMOS LIVRE PARA CRIAR UM O USUARIO CRIAR NOTAS

router.post('/', loginRequired, userController.store);
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

export default router;

/*
index ==> lista todos os usuarios  ====> get
store/create => cria um novo usuario ==> post
delete => apaga um usuario ==> DELETE
show => mostra um usuario ==> GET
update => actualiza um usuario ===> PATCH ou PUT

*/
