import nc from 'next-connect'
import {getOrgao, Salvar} from '../../../backend/db/DaoOrgao'

const Orgao = nc()
Orgao.get(getOrgao)
Orgao.post(Salvar)
module.exports= Orgao