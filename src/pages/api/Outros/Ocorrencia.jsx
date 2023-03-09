import nc from 'next-connect'
import {getOcorrencia, Salvar} from '../../../backend/db/DaoOcorrencias'

const Local = nc()
Local.get(getOcorrencia)
Local.post(Salvar)

module.exports= Local