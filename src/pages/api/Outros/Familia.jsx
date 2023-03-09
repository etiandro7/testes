import nc from 'next-connect'
import {Excluir, getFamilia, getFamiliaid,Salvar} from '../../../backend/db/DaoFamilia'

const Familia = nc()
Familia.get(getFamilia)
Familia.post(Salvar)
Familia.delete(Excluir)
Familia.get(getFamiliaid)
module.exports= Familia