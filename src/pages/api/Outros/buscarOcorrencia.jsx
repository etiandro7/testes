import nc from 'next-connect'
import {getVitima} from '../../../backend/db/buscarOcorrencia'

const b = nc()
b.get(getVitima)


module.exports= b