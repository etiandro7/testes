import nc from 'next-connect'
import {getBairro, getrua, Salvar} from '../../../backend/db/DaoRua'

const Rua = nc()
Rua.get(getrua)
Rua.post(Salvar)

module.exports= Rua