import nc from 'next-connect'
import {getdescricao, Salvar} from '../../../backend/db/DaoDescricaoCrime'

const descricao = nc()
descricao.get(getdescricao)
descricao.post(Salvar)

module.exports= descricao