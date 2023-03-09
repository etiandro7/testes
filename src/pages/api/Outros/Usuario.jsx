import nc from 'next-connect'
import { getUsuario, Salvar} from '../../../backend/db/DaoUsuario'

const Usuario = nc()
Usuario.get(getUsuario)
Usuario.post(Salvar)

module.exports = Usuario