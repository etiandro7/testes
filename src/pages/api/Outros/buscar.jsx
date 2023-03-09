import nc from 'next-connect'
import {getVitima} from '../../../backend/db/buscar'

const b = nc()
b.get(getVitima)


module.exports= b