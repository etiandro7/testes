import nc from 'next-connect'
import {getBairro, Salvar} from '../../../backend/db/DaoBairro'

const Bairro = nc()
Bairro.get(getBairro)
Bairro.post(Salvar)

module.exports= Bairro