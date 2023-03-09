import nc from 'next-connect'
import {Excluir, getLocal, Salvar} from '../../../backend/db/DaoLocalOcorrencia'

const Local = nc()
Local.get(getLocal)
Local.post(Salvar)
Local.delete(Excluir)
module.exports= Local