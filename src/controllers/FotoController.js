import multer from 'multer';
import multeConfig from '../config/multeConfig';
import Foto from '../models/Foto'; // Importando o model Foto, Obrigatorio

const upload = multer(multeConfig).single('photo');

class FotoController {
  store(req, res) {
    return upload(req, res, async (err) => { // => Construindo a funcao para reparar o erro
      if (err) {
        return res.status(400).json({
          errors: [err.code], // => selecionando o erro especifico no arrays
        });
      }
      try {
        const { originalname, filename } = req.file; // O campo que precisamos que precisa ser preenchido
        const { aluno_id } = req.body; // => O id referencia vem como o dado do body
        const foto = await Foto.create({ originalname, filename, aluno_id });

        return res.json(foto);
      } catch (e) {
        console.log(e);
        return res.status(400).json({
          errors: ['Aluno não existe'],
        });
      }
    });
  }
}

export default new FotoController();
