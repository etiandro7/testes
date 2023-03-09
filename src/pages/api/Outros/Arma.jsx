import nc from 'next-connect'
import {getArma, Salvar} from '../../../backend/db/DaoArma'

const Bairro = nc()
Bairro.get(getArma)
Bairro.post(Salvar)

module.exports= Bairro