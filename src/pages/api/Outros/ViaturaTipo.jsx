import nc from 'next-connect'
import {getViatura} from '../../../backend/db/ViatuaTipo'

const b = nc()
b.get(getViatura)


module.exports= b